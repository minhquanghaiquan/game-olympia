import React, { useState, useRef, useEffect } from "react";
import data from "../data/vuotChuongNgaiVatData";
import { FaCheckCircle } from "react-icons/fa";
import bellMp3 from "../assets/het_gio.m4a";
import countingMp3 from "../assets/counting.mp3";
import banner2 from "../assets/banner2.jpg";

// Giữ function reveal như cũ
function getKeywordReveal(statuses, clues, keyword, keywordCol) {
  return Array.from(keyword).map((_, i) => {
    let found = false;
    for (let rowIdx = 0; rowIdx < clues.length; ++rowIdx) {
      const row = clues[rowIdx];
      if (
        statuses[rowIdx] === "correct" &&
        row.startCol <= i &&
        i < row.startCol + row.answer.length &&
        keywordCol === i
      ) {
        const ansIdx = keywordCol - row.startCol;
        if (
          ansIdx >= 0 &&
          ansIdx < row.answer.length &&
          row.answer[ansIdx].toUpperCase() === keyword[i].toUpperCase()
        ) {
          found = true;
          break;
        }
      }
    }
    return found ? keyword[i] : "";
  });
}

export default function VuotChuongNgaiVat() {
  const { clues, keyword, keywordCol } = data;

  const [statuses, setStatuses] = useState(Array(clues.length).fill("none"));
  const [selected, setSelected] = useState(null);
  const [showKeywordModal, setShowKeywordModal] = useState(false);
  const [keywordRevealed, setKeywordRevealed] = useState(false);

  const TIMER = 30;
  const [timeLeft, setTimeLeft] = useState(TIMER);
  const [isCounting, setIsCounting] = useState(false);
  const timerRef = useRef(null);
  const [showJudge, setShowJudge] = useState(false);
  const [mode, setMode] = useState("normal"); // normal | bonus
  const audioBellRef = useRef(null);
  const audioCountingRef = useRef(null);

  // Khi chọn câu hỏi mới
  useEffect(() => {
    if (selected !== null) {
      setTimeLeft(TIMER);
      setIsCounting(false); // KHÔNG bắt đầu đếm ngay
      setShowJudge(false);
      setMode("normal");

      // Dừng tất cả âm thanh
      if (audioBellRef.current) {
        audioBellRef.current.pause();
        audioBellRef.current.currentTime = 0;
      }
      if (audioCountingRef.current) {
        audioCountingRef.current.pause();
        audioCountingRef.current.currentTime = 0;
      }
    }
  }, [selected]);

  // Đếm ngược (chỉ chạy khi isCounting = true)
  useEffect(() => {
    if (isCounting && timeLeft > 0) {
      timerRef.current = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
      if (audioCountingRef.current && audioCountingRef.current.paused) {
        audioCountingRef.current.currentTime = 0;
        audioCountingRef.current.loop = true;
        audioCountingRef.current.play().catch(e => console.log("Play error:", e));
      }
    }
    if (isCounting && timeLeft === 0) {
      setIsCounting(false);
      setShowJudge(true);
      if (audioCountingRef.current) {
        audioCountingRef.current.pause();
        audioCountingRef.current.currentTime = 0;
      }
      if (audioBellRef.current) {
        audioBellRef.current.pause();
        audioBellRef.current.currentTime = 0;
        audioBellRef.current.play().catch(e => console.log("Play bell error:", e));
      }
    }
    return () => clearTimeout(timerRef.current);
  }, [isCounting, timeLeft]);

  // Hàm bắt đầu đếm giờ
  const handleStart = () => {
    setIsCounting(true);
    setShowJudge(false);
    setTimeLeft(TIMER);
    
    // Bắt đầu phát nhạc đếm
    if (audioCountingRef.current) {
      audioCountingRef.current.currentTime = 0;
      audioCountingRef.current.loop = true;
      audioCountingRef.current.play().catch(e => console.log("Play error:", e));
    }
  };

  // Đóng popup
  const handleCloseQuestion = () => {
    setSelected(null);
    setIsCounting(false);
    setShowJudge(false);
    setMode("normal");
    if (audioBellRef.current) {
      audioBellRef.current.pause();
      audioBellRef.current.currentTime = 0;
    }
    if (audioCountingRef.current) {
      audioCountingRef.current.pause();
      audioCountingRef.current.currentTime = 0;
    }
  };

  const handleCorrect = () => {
    setStatuses((prev) => prev.map((s, i) => (i === selected ? "correct" : s)));
    setSelected(null);
    setIsCounting(false);
    setShowJudge(false);
    setMode("normal");
    if (audioBellRef.current) {
      audioBellRef.current.pause();
      audioBellRef.current.currentTime = 0;
    }
    if (audioCountingRef.current) {
      audioCountingRef.current.pause();
      audioCountingRef.current.currentTime = 0;
    }
  };

  const handleWrong = () => {
    setStatuses((prev) => prev.map((s, i) => (i === selected ? "wrong" : s)));
    setSelected(null);
    setIsCounting(false);
    setShowJudge(false);
    setMode("normal");
    if (audioBellRef.current) {
      audioBellRef.current.pause();
      audioBellRef.current.currentTime = 0;
    }
    if (audioCountingRef.current) {
      audioCountingRef.current.pause();
      audioCountingRef.current.currentTime = 0;
    }
  };

  const handleBonus = () => {
    setTimeLeft(15);
    setIsCounting(true);
    setShowJudge(false);
    setMode("bonus");
    if (audioBellRef.current) {
      audioBellRef.current.pause();
      audioBellRef.current.currentTime = 0;
    }
    if (audioCountingRef.current) {
      audioCountingRef.current.currentTime = 0;
      audioCountingRef.current.loop = true;
      audioCountingRef.current.play().catch(e => console.log("Play error:", e));
    }
  };

  // Lật ô từ khoá
  const handleRevealKeyword = () => {
    setKeywordRevealed(true);
    setStatuses(Array(clues.length).fill("correct"));
    setShowKeywordModal(false);
  };

  // Hiển thị ô từ khoá theo luật
  const keywordArr = Array.from(keyword);
  const keywordDisplay = keywordRevealed
    ? keywordArr
    : getKeywordReveal(statuses, clues, keyword, keywordCol);
  const maxCols = keywordArr.length;

  return (
    <div
      className="relative min-h-screen flex flex-col items-center py-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${banner2})` }}
    >
      {/* Overlay riêng – chỉnh độ mờ tại đây */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      {/* Toàn bộ nội dung */}
      <div className="relative z-10 w-full flex flex-col items-center">

        {/* AUDIO */}
        <audio ref={audioBellRef} src={bellMp3} preload="auto" />
        <audio ref={audioCountingRef} src={countingMp3} preload="auto" />

        {/* Tiêu đề */}
        <h2 className="text-3xl font-extrabold text-white mb-6 tracking-wide drop-shadow-md">
          Vượt Chướng Ngại Vật Olympia
        </h2>

        {/* Ô chữ TỪ KHOÁ ở đầu trang */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex gap-2 mb-2 justify-center">
            {keywordArr.map((ch, idx) => (
              <div
                key={idx}
                className="w-12 h-12 border-4 border-yellow-400 bg-black/50 flex items-center justify-center rounded font-extrabold text-2xl text-yellow-300"
              >
                {keywordDisplay[idx]}
              </div>
            ))}
          </div>
          <div className="text-center text-yellow-200 text-lg font-bold">
            TỪ KHOÁ
          </div>
          <button
            className="mt-3 w-fit px-4 py-2 bg-yellow-500 text-white rounded font-bold shadow hover:bg-yellow-600 transition"
            onClick={() => setShowKeywordModal(true)}
          >
            Giải từ khoá
          </button>
        </div>

        {/* Grid hàng ngang và câu hỏi */}
        <div className="flex flex-col gap-2">
          {clues.map((row, rowIdx) => (
            <div key={rowIdx} className="flex gap-2 items-center mb-2">
              <button
                disabled={statuses[rowIdx] !== "none"}
                onClick={() => setSelected(rowIdx)}
                className={`
                  w-12 h-12 rounded-full text-2xl font-bold flex-shrink-0
                  border-4 text-white
                  ${
                    statuses[rowIdx] === "correct"
                      ? "bg-green-400 border-green-500"
                      : statuses[rowIdx] === "wrong"
                      ? "bg-gray-400 border-gray-500"
                      : "bg-orange-500 border-orange-300 hover:bg-orange-600"
                  }
                `}
              >
                {rowIdx + 1}
              </button>

              {Array.from({ length: row.startCol }).map((_, i) => (
                <div key={i} className="w-12 h-12" />
              ))}

              {Array.from({ length: row.answer.length }).map((_, colIdx) => {
                const globalCol = colIdx + row.startCol;
                const isKeywordCol = globalCol === keywordCol;
                const status = statuses[rowIdx];
                let char = "";

                if (status === "correct" || keywordRevealed) {
                  char = row.answer[colIdx];
                }
                if (
                  isKeywordCol &&
                  char &&
                  keywordDisplay[globalCol] &&
                  row.answer[colIdx].toUpperCase() ===
                    keyword[globalCol].toUpperCase()
                ) {
                  char = keywordDisplay[globalCol];
                }

                return (
                  <div
                    key={colIdx}
                    className={`
                      w-12 h-12 border-2 flex items-center justify-center
                      font-extrabold text-2xl rounded select-none relative
                      ${
                        status === "correct"
                          ? "bg-purple-600 text-white"
                          : status === "wrong"
                          ? "bg-gray-400 text-gray-300"
                          : "bg-white text-black"
                      }
                      ${isKeywordCol ? "border-4 border-red-400" : "border-white"}
                      shadow
                    `}
                  >
                    {char}
                  </div>
                );
              })}

              {Array.from({
                length: maxCols - row.startCol - row.answer.length,
              }).map((_, i) => (
                <div key={i} className="w-12 h-12" />
              ))}

              {statuses[rowIdx] === "correct" && (
                <FaCheckCircle className="text-green-400 text-2xl ml-2" />
              )}
              {statuses[rowIdx] === "wrong" && (
                <span className="ml-2 text-xl text-gray-300 font-bold">✗</span>
              )}
            </div>
          ))}
        </div>

        {/* POPUP CÂU HỎI */}
        {selected !== null && statuses[selected] === "none" && (
          <div className="fixed inset-0 bg-black/60 flex items-start justify-center z-50">
            <div
              className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-2xl relative mt-10"
              style={{
                width: "80vw",
                maxWidth: 1000,
                minHeight: "45vh",
                padding: "3.5rem 2rem",
                transition: "all 0.2s",
              }}
            >
              {/* Nút X */}
              <button
                onClick={handleWrong}
                className="absolute top-4 right-6 text-gray-500 hover:text-red-500 text-3xl font-bold transition"
                style={{ zIndex: 10 }}
                title="Đóng"
              >
                <span>&times;</span>
              </button>

              <div
                className="font-extrabold mb-4 text-purple-800"
                style={{
                  fontSize: "2.6rem",
                  lineHeight: 1.2,
                  textAlign: "center",
                  maxWidth: "90%",
                  wordBreak: "break-word",
                }}
              >
                {clues[selected].clue}
              </div>

              {/* Dòng thông tin + ô vuông to hơn */}
              {(() => {
                const ansLen = clues[selected].answer.length;
                return (
                  <div className="mt-4 flex flex-col items-center">
                    <div className="text-2xl md:text-3xl font-extrabold text-slate-800">
                      Hàng ngang có {ansLen} từ khoá
                    </div>
                    <div className="mt-3 flex gap-2">
                      {Array.from({ length: ansLen }).map((_, i) => (
                        <div
                          key={i}
                          className="
                            w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14
                            rounded-md border border-gray-300 bg-gray-100 shadow-inner
                          "
                        />
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Hiển thị nút Bắt đầu nếu chưa bắt đầu */}
              {!isCounting && !showJudge && (
                <div className="mt-6">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded text-2xl"
                    onClick={handleStart}
                  >
                    Bắt đầu
                  </button>
                </div>
              )}

              {/* Hiển thị bộ đếm thời gian khi đã bắt đầu */}
              {(isCounting || showJudge) && (
                <div
                  className="font-extrabold text-red-500 mb-2"
                  style={{ fontSize: "4.5rem" }}
                >
                  {timeLeft > 0 ? `${timeLeft} giây` : "HẾT GIỜ!"}
                </div>
              )}

              {showJudge && (
                <div className="flex gap-6 mt-6">
                  {mode === "normal" ? (
                    <>
                      <button
                        className="bg-green-500 text-white px-10 py-4 rounded-lg font-bold text-3xl hover:bg-green-600"
                        onClick={handleCorrect}
                      >
                        Đúng
                      </button>
                      <button
                        className="bg-orange-500 text-white px-10 py-4 rounded-lg font-bold text-3xl hover:bg-orange-600"
                        onClick={handleBonus}
                      >
                        Bổ sung
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="bg-green-500 text-white px-10 py-4 rounded-lg font-bold text-3xl hover:bg-green-600"
                        onClick={handleCorrect}
                      >
                        Đúng
                      </button>
                      <button
                        className="bg-gray-500 text-white px-10 py-4 rounded-lg font-bold text-3xl hover:bg-gray-700"
                        onClick={handleWrong}
                      >
                        Sai
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* POPUP GIẢI TỪ KHOÁ */}
        {showKeywordModal && (
          <div className="fixed inset-0 bg-black/40 flex items-start justify-center z-50">
            <div className="bg-white p-8 rounded-xl w-[400px] shadow-2xl flex flex-col items-center gap-4 relative mt-12">
              <button
                onClick={() => setShowKeywordModal(false)}
                className="absolute top-4 right-6 text-gray-500 hover:text-red-500 text-3xl font-bold transition"
                title="Đóng"
                style={{ zIndex: 10 }}
              >
                <span>&times;</span>
              </button>
              <div className="text-xl font-bold text-orange-700 mb-2">
                Giải từ khoá vượt chướng ngại vật!
              </div>
              <button
                className="bg-yellow-500 text-white px-5 py-2 rounded hover:bg-yellow-600 font-bold text-lg"
                onClick={handleRevealKeyword}
              >
                Lật ô từ khoá
              </button>
            </div>
          </div>
        )}
      </div>
      {/* KẾT THÚC nội dung */}
    </div>
  );
}