import React, { useState, useRef, useEffect } from "react";
import data from "../data/vuotChuongNgaiVatDataTest";
import { FaCheckCircle } from "react-icons/fa";
import bellMp3 from "../assets/het_gio.m4a";
import countingMp3 from "../assets/dong_ho.mp3";
import banner2 from "../assets/hinhnen8.jpg";

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
  const [isStopped, setIsStopped] = useState(false);
  const timerRef = useRef(null);
  const [showJudge, setShowJudge] = useState(false);
  const [mode, setMode] = useState("normal");
  const audioBellRef = useRef(null);
  const audioCountingRef = useRef(null);

  // Khi chọn câu hỏi mới
  useEffect(() => {
    if (selected !== null) {
      setTimeLeft(TIMER);
      setIsCounting(false);
      setIsStopped(false);
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
    }
  }, [selected]);

  // Đếm ngược
  useEffect(() => {
    if (isCounting && timeLeft > 0 && !isStopped) {
      timerRef.current = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
      if (audioCountingRef.current && audioCountingRef.current.paused) {
        audioCountingRef.current.currentTime = 0;
        audioCountingRef.current.loop = true;
        audioCountingRef.current.play().catch(e => console.log("Play error:", e));
      }
    }
    if (isCounting && timeLeft === 0 && !isStopped) {
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
  }, [isCounting, timeLeft, isStopped]);

  // Hàm bắt đầu đếm giờ
  const handleStart = () => {
    setIsCounting(true);
    setIsStopped(false);
    setShowJudge(false);
    setTimeLeft(TIMER);
    
    if (audioCountingRef.current) {
      audioCountingRef.current.currentTime = 0;
      audioCountingRef.current.loop = true;
      audioCountingRef.current.play().catch(e => console.log("Play error:", e));
    }
  };

  // Hàm dừng đếm giờ
  const handleStop = () => {
    setIsStopped(true);
    setIsCounting(false);
    setShowJudge(true);
    
    if (audioCountingRef.current) {
      audioCountingRef.current.pause();
      audioCountingRef.current.currentTime = 0;
    }
  };

  // Đóng popup
  const handleCloseQuestion = () => {
    setSelected(null);
    setIsCounting(false);
    setIsStopped(false);
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
    setIsStopped(false);
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
    setIsStopped(false);
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
    setTimeLeft(30);
    setIsCounting(true);
    setIsStopped(false);
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
      className="relative min-h-screen flex flex-col items-center py-8 bg-cover bg-center overflow-auto"
      style={{ backgroundImage: `url(${banner2})` }}
    >

      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Toàn bộ nội dung */}
      <div className="relative z-10 w-full flex flex-col items-center">

        {/* AUDIO */}
        <audio ref={audioBellRef} src={bellMp3} preload="auto" />
        <audio ref={audioCountingRef} src={countingMp3} preload="auto" />

        {/* Tiêu đề - ĐIỀU CHỈNH KÍCH THƯỚC */}
        <h2 className="text-4xl font-extrabold text-white mb-6 tracking-wide drop-shadow-md">
          GIẢI Ô CHỮ
        </h2>

        {/* Ô chữ TỪ KHOÁ ở đầu trang - ĐIỀU CHỈNH KÍCH THƯỚC */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex gap-2 mb-3 justify-center flex-wrap max-w-4xl mx-auto">
            {keywordArr.map((ch, idx) => (
              <div
                key={idx}
                className="w-14 h-14 border-3 border-yellow-400 bg-black/60 flex items-center justify-center rounded font-extrabold text-2xl text-yellow-300"
              >
                {keywordDisplay[idx]}
              </div>
            ))}
          </div>
          <div className="text-center text-yellow-200 text-xl font-bold mb-3">
            TỪ KHOÁ CÓ 11 CHỮ CÁI
          </div>
          <button
            className="px-5 py-2 bg-yellow-500 text-white rounded-lg font-bold text-lg shadow hover:bg-yellow-600 transition"
            onClick={() => setShowKeywordModal(true)}
          >
            Giải từ khoá
          </button>
        </div>

        {/* Grid hàng ngang và câu hỏi - ĐIỀU CHỈNH KÍCH THƯỚC */}
        <div className="flex flex-col gap-3 max-w-5xl mx-auto px-4">
          {clues.map((row, rowIdx) => (
            <div key={rowIdx} className="flex gap-2 items-center mb-3">
              <button
                disabled={statuses[rowIdx] !== "none"}
                onClick={() => setSelected(rowIdx)}
                className={`
                  w-14 h-14 rounded-full text-2xl font-bold flex-shrink-0
                  border-3 text-white
                  ${
                    statuses[rowIdx] === "correct"
                      ? "bg-green-500 border-green-600"
                      : statuses[rowIdx] === "wrong"
                      ? "bg-gray-500 border-gray-600"
                      : "bg-orange-500 border-orange-400 hover:bg-orange-600"
                  }
                `}
              >
                {rowIdx + 1}
              </button>

              {Array.from({ length: row.startCol }).map((_, i) => (
                <div key={i} className="w-14 h-14" />
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
                      w-14 h-14 border-2 flex items-center justify-center
                      font-extrabold text-2xl rounded select-none relative
                      ${
                        status === "correct"
                          ? "bg-purple-600 text-white"
                          : status === "wrong"
                          ? "bg-gray-500 text-gray-200"
                          : "bg-white text-black"
                      }
                      ${isKeywordCol ? "border-3 border-red-500" : "border-gray-300"}
                      shadow-md
                    `}
                  >
                    {char}
                  </div>
                );
              })}

              {Array.from({
                length: maxCols - row.startCol - row.answer.length,
              }).map((_, i) => (
                <div key={i} className="w-14 h-14" />
              ))}

              {statuses[rowIdx] === "correct" && (
                <FaCheckCircle className="text-green-500 text-2xl ml-2" />
              )}
              {statuses[rowIdx] === "wrong" && (
                <span className="ml-2 text-xl text-gray-300 font-bold">✗</span>
              )}
            </div>
          ))}
        </div>

        {/* POPUP CÂU HỎI - ĐIỀU CHỈNH KÍCH THƯỚC */}
        {selected !== null && statuses[selected] === "none" && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div
              className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-2xl relative"
              style={{
                width: "90vw",
                maxWidth: 900,
                minHeight: "50vh",
                maxHeight: "90vh",
                padding: "3rem 2rem",
                overflow: "auto",
              }}
            >
              {/* Nút X - ĐIỀU CHỈNH KÍCH THƯỚC */}
              <button
                onClick={handleWrong}
                className="absolute top-4 right-5 text-gray-500 hover:text-red-500 text-3xl font-bold transition"
                style={{ zIndex: 10 }}
                title="Đóng"
              >
                <span>&times;</span>
              </button>

              <div
                className="font-extrabold mb-4 text-purple-800 text-center"
                style={{
                  fontSize: "2.5rem",
                  lineHeight: 1.3,
                  maxWidth: "90%",
                }}
              >
                {clues[selected].clue}
              </div>

              {/* Dòng thông tin + ô vuông - ĐIỀU CHỈNH KÍCH THƯỚC */}
              {(() => {
                const ansLen = clues[selected].answer.length;
                return (
                  <div className="mt-4 flex flex-col items-center">
                    <div className="text-2xl font-extrabold text-slate-800">
                      Hàng ngang có {ansLen} từ khoá
                    </div>
                    <div className="mt-3 flex gap-2">
                      {Array.from({ length: ansLen }).map((_, i) => (
                        <div
                          key={i}
                          className="
                            w-10 h-10 md:w-11 md:h-11
                            rounded border border-gray-300 bg-gray-100 shadow-inner
                          "
                        />
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Hiển thị nút Bắt đầu nếu chưa bắt đầu - ĐIỀU CHỈNH KÍCH THƯỚC */}
              {!isCounting && !showJudge && !isStopped && (
                <div className="mt-6">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded text-2xl"
                    onClick={handleStart}
                  >
                    Bắt đầu
                  </button>
                </div>
              )}

              {/* Hiển thị bộ đếm thời gian và nút Dừng - ĐIỀU CHỈNH KÍCH THƯỚC */}
              {(isCounting && !isStopped) && (
                <div className="flex flex-col items-center gap-4 mt-6">
                  <div
                    className="font-extrabold text-red-500 mb-2"
                    style={{ fontSize: "4rem" }}
                  >
                    {timeLeft > 0 ? `${timeLeft} giây` : "HẾT GIỜ!"}
                  </div>
                  <button
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded text-2xl"
                    onClick={handleStop}
                  >
                    Dừng
                  </button>
                </div>
              )}

              {/* Hiển thị khi đã dừng hoặc hết giờ - ĐIỀU CHỈNH KÍCH THƯỚC */}
              {(isStopped || (showJudge && !isCounting)) && (
                <div className="flex flex-col items-center gap-4 mt-6">
                  {timeLeft === 0 && !isStopped && (
                    <div className="text-3xl text-red-600 font-bold">Hết giờ!</div>
                  )}
                  {isStopped && (
                    <div className="text-3xl text-blue-600 font-bold">Đã dừng!</div>
                  )}
                  
                  <div className="flex gap-4 mt-4 flex-wrap justify-center">
                    {mode === "normal" ? (
                      <>
                        <button
                          className="bg-green-500 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold text-2xl"
                          onClick={handleCorrect}
                        >
                          Đúng
                        </button>
                        <button
                          className="bg-orange-500 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-bold text-2xl"
                          onClick={handleBonus}
                        >
                          Bổ sung
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="bg-green-500 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold text-2xl"
                          onClick={handleCorrect}
                        >
                          Đúng
                        </button>
                        <button
                          className="bg-gray-500 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-bold text-2xl"
                          onClick={handleWrong}
                        >
                          Sai
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* POPUP GIẢI TỪ KHOÁ - ĐIỀU CHỈNH KÍCH THƯỚC */}
        {showKeywordModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-2xl flex flex-col items-center gap-4 relative">
              <button
                onClick={() => setShowKeywordModal(false)}
                className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold transition"
                title="Đóng"
                style={{ zIndex: 10 }}
              >
                <span>&times;</span>
              </button>
              <div className="text-xl font-bold text-orange-700 mb-2 text-center">
                Giải từ khoá vượt chướng ngại vật!
              </div>
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded font-bold text-lg"
                onClick={handleRevealKeyword}
              >
                Lật ô từ khoá
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}