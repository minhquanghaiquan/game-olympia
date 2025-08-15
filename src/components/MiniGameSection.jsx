import React, { useState, useEffect, useRef } from "react";
import essayQuestions from "../data/minigameQuestions";
import bellMp3 from "../assets/het_gio.m4a"; // Âm báo khi hết giờ
import bannerImage from '../assets/hinhnen5.jpg';
import countingMp3 from "../assets/counting.mp3"; // Âm báo đếm giờ (bạn nhớ thêm file này)

export default function EssaySection() {
  const [answered, setAnswered] = useState(Array(essayQuestions.length).fill(false));
  const [selected, setSelected] = useState(null);
  const [isCounting, setIsCounting] = useState(false);
  const [isSupplement, setIsSupplement] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(40);
  const timerRef = useRef(null);
  const bellAudioRef = useRef(null);
  const countingAudioRef = useRef(null);

  // Chia hàng nút số thành 5 hàng mỗi hàng 6 câu hỏi
  const rows = [...Array(5)].map((_, ridx) => essayQuestions.slice(ridx * 6, ridx * 6 + 6));


  const handleSelect = (idx) => {
    if (!answered[idx]) {
      setSelected(idx);
      setIsCounting(false);
      setIsSupplement(false);
      setShowAnswer(false);
      setTimeLeft(40);
    }
  };

  const handleClose = () => {
    setSelected(null);
    setIsCounting(false);
    setIsSupplement(false);
    setTimeLeft(40);
    if (selected !== null) {
      setAnswered((prev) => prev.map((val, i) => (i === selected ? true : val)));
    }
    if (countingAudioRef.current) {
      countingAudioRef.current.pause();
      countingAudioRef.current.currentTime = 0;
    }
    if (bellAudioRef.current) {
      bellAudioRef.current.pause();
      bellAudioRef.current.currentTime = 0;
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(true); // Show the answer when clicked
  };



  return (
    <div className="my-8 p-4 rounded-xl shadow relative overflow-hidden">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-blur-sm"
        style={{
          backgroundImage: `url(${bannerImage})`, // Replace with your image URL
          filter: "blur(2px)", // Apply a subtle blur to the image
          zIndex: -1, // Ensure the background stays behind other content
          position: "fixed", // Make the background fixed and cover the entire screen
          top: 0, // Position it at the top of the screen
          left: 0, // Position it at the left of the screen
          width: "100vw", // Ensure it covers the full viewport width
          height: "100vh", // Ensure it covers the full viewport height
        }}
      ></div>

      {/* TIÊU ĐỀ */}
      <h2 className="text-5xl font-extrabold mb-12 text-yellow-400 text-center tracking-wide uppercase relative z-10">
        MINIGAME CHO KHÁN GIẢ
      </h2>

      {/* Các hàng nút */}
      <div className="w-full flex flex-col gap-12 items-center mb-6 relative z-10">
        {rows.map((row, ridx) => (
          <div key={ridx} className="flex gap-8 justify-center">
            {row.map((q, idx) => {
              const realIdx = ridx * 6 + idx;
              return (
                <button
                  key={realIdx}
                  disabled={answered[realIdx]}
                  onClick={() => handleSelect(realIdx)}
                  className={`w-28 h-28 rounded-full text-5xl font-extrabold flex items-center justify-center
                    ${answered[realIdx] ? "bg-gray-300 text-gray-500" : "bg-yellow-400 text-white hover:bg-yellow-500"}
                    focus:outline-none transition`}
                  style={{
                    boxShadow: '0 8px 32px rgba(0,0,0,0.07)',
                    fontSize: '1.75rem',
                  }}
                >
                  {realIdx + 1}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-12 rounded-2xl shadow-2xl w-[90vw] max-w-[1400px] relative flex flex-col gap-10">
            <button
              className="absolute -right-8 -top-8 text-5xl text-purple-500 hover:text-purple-700 z-10"
              onClick={handleClose}
              title="Đóng"
              style={{ lineHeight: '1' }}
            >
              ✖
            </button>

            <h3 className="font-extrabold text-4xl md:text-5xl text-blue-600 mb-4 text-justify leading-snug whitespace-pre-line">
              {essayQuestions[selected].question}
            </h3>




            {/* Đáp án */}
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded text-3xl"
              onClick={handleShowAnswer}
            >
              Đáp án
            </button>

            {showAnswer && (
              <div className="text-3xl font-medium mt-6">
                <strong>Đáp án:</strong> {essayQuestions[selected].answer}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}