import React, { useEffect, useRef, useState } from "react";

// === CONFIG ===
const API_KEY = "AIzaSyBakiumLfaVFv1WeTYoj_cDwrBunXCFfKg";
const SHEET_ID = "1L6NrEPe7xFn8ZLvO4kOz2PWAc3dta0Id4A5RlVaxRWw";
const CORRECT_ANSWERS = { DA1: "B", DA2: "A", DA3: "D", DA4: "B", DA5: "A", DA6: "A", DA7: "C", DA8: "A", DA9: "C" };
const REFRESH_MS = 2000; // cập nhật mỗi 2s, mượt (không giật)

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
  const rawId = getRawId();

  const prevDataRef = useRef(null);
  const firstLoadRef = useRef(true);

  const handleClose = () => {
    // Chỉ đóng được nếu tab này được mở bằng window.open từ hành động click
    window.close();
    // Fallback nếu trình duyệt không cho đóng (mở trực tiếp/refresh)
    setTimeout(() => {
      if (!document.hidden) {
        alert("Không thể tự đóng tab này (không mở bằng nút). Hãy đóng tab thủ công nhé.");
      }
    }, 200);
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
    
      // Chỉ cập nhật khi dữ liệu thực sự thay đổi để tránh re-render nháy
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
    fetchData(); // lần đầu có spinner
    const id = setInterval(fetchData, REFRESH_MS); // các lần sau cập nhật ngầm
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Đóng bằng phím ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const correctAnswer = CORRECT_ANSWERS[sheetName] || "";

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 relative">
      {/* Nút X cố định góc phải */}
      <button
        onClick={handleClose}
        aria-label="Đóng tab"
        title="Đóng"
        className="fixed top-4 right-4 w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 text-3xl leading-none flex items-center justify-center shadow"
      >
        ×
      </button>

      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
          KẾT QUẢ CÂU {rawId}
        </h1>

        {isLoading ? (
          <p className="text-center text-gray-500 italic text-xl">Đang tải dữ liệu...</p>
        ) : (
          <table className="w-full border-collapse text-center text-lg">
            <thead>
              <tr className="bg-blue-100 text-blue-800 font-semibold">
                <th className="border px-6 py-4 text-lg">THỜI GIAN</th>
                <th className="border px-6 py-4 text-lg">ĐỘI</th>
                <th className="border px-6 py-4 text-lg">ĐÁP ÁN</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => {
                const group = row[1];
                const time = row[3];   // cột D do script ghi (đã định dạng ms)
                const answer = row[2];
                const isCorrect = answer === correctAnswer;

                // key ổn định để React không remount hàng → tránh nháy
                const key = `${time}|${group}|${answer}|${idx}`;

                return (
                  <tr key={key} className={isCorrect ? "bg-green-50" : "bg-red-50"}>
                    <td className="border px-6 py-4 text-lg">{time}</td>
                    <td className="border px-6 py-4 text-lg">{group}</td>
                    <td className={`border px-6 py-4 font-medium text-lg ${isCorrect ? "text-green-700" : "text-red-700"}`}>
                      {answer} {!isCorrect && <span className="italic">(Sai)</span>}
                    </td>
                  </tr>
                );
              })}
              {data.length === 0 && (
                <tr>
                  <td colSpan={3} className="py-8 text-gray-500 italic text-lg">
                    Không có dữ liệu nào.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}

        <p className="text-sm text-gray-400 mt-4 text-right italic">
          Tự động cập nhật mỗi {REFRESH_MS / 1000}s • Bấm <b>×</b> để đóng tab
        </p>
      </div>
    </div>
  );
}
