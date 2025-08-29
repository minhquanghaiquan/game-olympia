import React, { useEffect, useRef, useState } from "react";

// === CONFIG ===
const API_KEY = "AIzaSyBakiumLfaVFv1WeTYoj_cDwrBunXCFfKg";
const SHEET_ID = "1L6NrEPe7xFn8ZLvO4kOz2PWAc3dta0Id4A5RlVaxRWw";
const CORRECT_ANSWERS = { DA1: "A", DA2: "B", DA3: "A", DA4: "C", DA5: "B", DA6: "D", DA7: "D", DA8: "C", DA9: "D" };
const REFRESH_MS = 1000;

function getSheetParamId() {
  const id = new URLSearchParams(window.location.search).get("id");
  return id && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(id) ? `DA${id}` : "DA1";
}
function getRawId() {
  const id = new URLSearchParams(window.location.search).get("id");
  return id && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(id) ? id : "1";
}

export default function AnswerPage() {
  const [data, setData] = useState([]);
  const [sheetName, setSheetName] = useState("DA1");
  const [isLoading, setIsLoading] = useState(true);
  const [showAnswers, setShowAnswers] = useState(false);
  const rawId = getRawId();

  const prevDataRef = useRef(null);
  const firstLoadRef = useRef(true);

  const handleClose = () => {
    window.close();
    setTimeout(() => {
      if (!document.hidden) {
        alert("Không thể tự đóng tab này (không mở bằng nút). Hãy đóng tab thủ công nhé.");
      }
    }, 200);
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
  };

  const fetchData = async () => {
    const currentSheet = getSheetParamId();
    if (sheetName !== currentSheet) setSheetName(currentSheet);

    if (firstLoadRef.current) setIsLoading(true);

    try {
      const url =
        `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}` +
        `/values/${encodeURIComponent(currentSheet)}!A1:D?valueRenderOption=FORMATTED_VALUE&key=${API_KEY}`;

      const res = await fetch(url, { cache: "no-store" });
      const result = await res.json();
      var rows = result.values ? result.values.slice(1) : [];
      rows = rows.map(r => {
        r[3] = r[3].split(" ")[1];
        return r;
      });

      rows.sort((a, b) => {
        return a[3].localeCompare(b[3]);
      });

      const prev = prevDataRef.current;
      const changed = JSON.stringify(prev) !== JSON.stringify(rows);
      if (changed) {
        setData(rows);
        prevDataRef.current = rows;
      }
    } catch (e) {
      console.error("Lỗi khi lấy dữ liệu từ Google Sheets:", e);
      if (firstLoadRef.current) setData([]);
    } finally {
      if (firstLoadRef.current) {
        setIsLoading(false);
        firstLoadRef.current = false;
      }
    }
  };

  useEffect(() => {
    fetchData();
    const id = setInterval(fetchData, REFRESH_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const correctAnswer = CORRECT_ANSWERS[sheetName] || "";

  return (
    <div className="min-h-screen bg-gray-100 p-0 m-0 relative" style={{ fontSize: '1.5rem' }}>
      {/* Nút X cố định góc phải - lớn hơn */}
      <button
        onClick={handleClose}
        aria-label="Đóng tab"
        title="Đóng"
        className="fixed top-6 right-6 w-20 h-20 rounded-full bg-red-500 hover:bg-red-600 text-white text-5xl leading-none flex items-center justify-center shadow-lg z-50"
        style={{ fontSize: '3rem' }}
      >
        ×
      </button>

      <div className="w-full min-h-screen bg-white p-8">
        <h1 className="text-6xl font-bold text-center mb-10 text-blue-800 pt-4">
          KẾT QUẢ CÂU {rawId}
        </h1>

        {!showAnswers && (
          <div className="text-center mb-10">
            <button
              onClick={handleShowAnswers}
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-6 px-16 rounded text-4xl shadow-lg transition-all duration-300 transform hover:scale-105"
              style={{ fontSize: '2.5rem' }}
            >
              HIỂN THỊ ĐÁP ÁN
            </button>
            <audio id="answerSound" src="https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3"></audio>
          </div>
        )}

        {showAnswers && (
          <div className="text-center mb-10">
            <button
              className="bg-pink-600 hover:bg-blue-800 text-white font-bold py-6 px-16 rounded text-4xl shadow-lg transition-all duration-300 transform hover:scale-105"
              style={{ fontSize: '2.5rem' }}
            >
              ĐÁP ÁN ĐÚNG LÀ {correctAnswer}
            </button>
          </div>
        )}

        {isLoading ? (
          <div className="text-center py-20">
            <p className="text-gray-600 italic text-4xl">Đang tải dữ liệu...</p>
          </div>
        ) : (
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse text-center" style={{ fontSize: '2.2rem' }}>
              <thead>
                <tr className="bg-blue-200 text-blue-900 font-bold">
                  <th className="border-4 border-blue-300 px-10 py-8" style={{ fontSize: '2.5rem' }}>THỜI GIAN</th>
                  <th className="border-4 border-blue-300 px-10 py-8" style={{ fontSize: '2.5rem' }}>ĐỘI</th>
                  <th className="border-4 border-blue-300 px-10 py-8" style={{ fontSize: '2.5rem' }}>ĐÁP ÁN</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, idx) => {
                  const group = row[1];
                  const time = row[3];
                  const answer = row[2];
                  const isCorrect = answer === correctAnswer;

                  const key = `${time}|${group}|${answer}|${idx}`;

                  return (
                    <tr
                      key={key}
                      className={showAnswers ? (isCorrect ? "bg-green-100" : "bg-red-100") : ""}
                      style={{ height: '100px' }}
                    >
                      <td className="border-4 border-gray-200 px-10 py-6 font-semibold">{time}</td>
                      <td className="border-4 border-gray-200 px-10 py-6 font-semibold">{group}</td>
                      <td className={`border-4 border-gray-200 px-10 py-6 font-bold ${showAnswers ? (isCorrect ? "text-green-700" : "text-red-700") : "text-gray-900"}`}>
                        {answer} {showAnswers && !isCorrect && <span className="italic text-3xl">(Sai)</span>}
                      </td>
                    </tr>
                  );
                })}
                {data.length === 0 && (
                  <tr>
                    <td colSpan={3} className="py-16 text-gray-600 italic text-4xl text-center">
                      Không có dữ liệu nào.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* <div className="mt-10 text-center">
          <p className="text-gray-500 text-3xl italic">
            Tự động cập nhật mỗi {REFRESH_MS / 1000}s • Bấm <b className="text-red-500">×</b> để đóng tab
          </p>
        </div> */}
      </div>
    </div>
  );
}