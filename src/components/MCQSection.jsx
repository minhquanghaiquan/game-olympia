import React, { useState, useEffect, useRef } from "react";
import mcqQuestions from "../data/mcqQuestions";
import bellMp3 from "../assets/het_gio.m4a";
import countingMp3 from "../assets/counting.mp3";
import bannerImage from '../assets/hinhnen7.jpg';

const optionLabels = ["A", "B", "C", "D", "E", "F"];

export default function MCQSection() {
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState(Array(mcqQuestions.length).fill(null));
  const [submitted, setSubmitted] = useState(Array(mcqQuestions.length).fill(false));
  const [showCorrect, setShowCorrect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const timerRef = useRef(null);
  const bellAudioRef = useRef(null);
  const countingAudioRef = useRef(null);

  useEffect(() => {
    if (selected !== null && !submitted[selected] && timeLeft > 0) {
      if (countingAudioRef.current) {
        countingAudioRef.current.loop = true;
        countingAudioRef.current.play().catch(() => {});
      }
      timerRef.current = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    } else {
      if (countingAudioRef.current) {
        countingAudioRef.current.pause();
        countingAudioRef.current.currentTime = 0;
      }
      if (selected !== null && timeLeft === 0 && !submitted[selected]) {
        if (bellAudioRef.current) bellAudioRef.current.play();
        setShowCorrect(true);
        setSubmitted((prev) => prev.map((val, i) => (i === selected ? true : val)));
      }
    }
    return () => clearTimeout(timerRef.current);
  }, [selected, timeLeft]);

  const handleSelect = (idx) => {
    if (!submitted[idx]) {
      setSelected(idx);
      setTimeLeft(15);
      setShowCorrect(false);
      if (countingAudioRef.current) {
        countingAudioRef.current.currentTime = 0;
        countingAudioRef.current.play().catch(() => {});
      }
    }
  };

  const handleAnswer = (idx, optIdx) => {
    if (submitted[selected] || showCorrect) return;
    const next = [...answers];
    next[idx] = optIdx;
    setAnswers(next);
    setSubmitted((prev) => prev.map((val, i) => (i === idx ? true : val)));
    setShowCorrect(true);
    if (countingAudioRef.current) {
      countingAudioRef.current.pause();
      countingAudioRef.current.currentTime = 0;
    }
  };

  const handleClose = () => {
    setSelected(null);
    setTimeLeft(15);
    setShowCorrect(false);
    if (countingAudioRef.current) {
      countingAudioRef.current.pause();
      countingAudioRef.current.currentTime = 0;
    }
    if (bellAudioRef.current) {
      bellAudioRef.current.pause();
      bellAudioRef.current.currentTime = 0;
    }
  };

  return (
    <div className="my-8 p-4  rounded-2xl shadow-xl max-w-[1400px] mx-auto">
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
      <h2 className="text-5xl font-extrabold mb-12 text-yellow-400 text-center tracking-wide uppercase">
        PHẦN TRẮC NGHIỆM
      </h2>

      <div className="w-full flex justify-center mb-8">
        <div className="flex flex-wrap gap-10 w-[80%] justify-center">
          {mcqQuestions.map((q, idx) => (
            <button
              key={idx}
              disabled={submitted[idx]}
              onClick={() => handleSelect(idx)}
              className={`w-32 h-32 rounded-full text-5xl font-extrabold flex items-center justify-center
                ${submitted[idx] ? "bg-gray-300 text-gray-500" : "bg-yellow-400 text-white hover:bg-blue-500"}
                focus:outline-none transition`}
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-10 rounded-2xl shadow-2xl w-[80vw] max-w-[1200px] relative flex flex-col gap-7">
            <button
              className="absolute -right-8 -top-8 text-4xl text-purple-500 hover:text-purple-700 z-10"
              onClick={handleClose}
              title="Đóng"
              style={{ lineHeight: "1" }}
            >
              ✖
            </button>

            <h3 className="font-extrabold text-3xl md:text-4xl text-green-700 mb-4 text-justify leading-relaxed whitespace-pre-line">
              {mcqQuestions[selected].question}
            </h3>

            <div className="flex flex-col gap-4">
              {mcqQuestions[selected].options.map((opt, optIdx) => {
                const label = optionLabels[optIdx];
                const isCorrect = showCorrect && optIdx === mcqQuestions[selected].answer;
                return (
                  <button
                    key={optIdx}
                    disabled={submitted[selected] || showCorrect}
                    onClick={() => handleAnswer(selected, optIdx)}
                    className={`flex items-center gap-4 px-6 py-5 rounded-xl text-2xl border font-semibold text-left transition
                      ${isCorrect ? "border-green-500 bg-green-100 text-green-700 font-bold animate-pulse" : "bg-gray-50 border-gray-300"}
                      ${submitted[selected] && answers[selected] === optIdx && !isCorrect ? "opacity-70 line-through" : ""}
                      ${!showCorrect && !submitted[selected] ? "hover:bg-blue-50" : ""}`}
                  >
                    <span className="w-10 h-10 flex items-center justify-center bg-blue-200 rounded-full text-blue-700 font-bold text-2xl">
                      {label}
                    </span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-center mt-3">
              {timeLeft > 0 && !showCorrect && (
                <div className="text-3xl text-red-600 font-bold">{timeLeft} giây</div>
              )}
              {showCorrect && (
                <div className="text-3xl text-green-700 font-extrabold ml-2">
                  Đáp án đúng:{" "}
                  <span className="underline">{optionLabels[mcqQuestions[selected].answer]}</span>
                </div>
              )}
            </div>

            {/* Nút dẫn đến bảng kết quả */}
            {showCorrect && (
              <a
                href={`/answers?id=${mcqQuestions[selected].id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 mx-auto bg-blue-600 text-white text-xl font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Xem bảng kết quả câu {mcqQuestions[selected].id}
              </a>
            )}

            <audio ref={countingAudioRef} src={countingMp3} preload="auto" />
            <audio ref={bellAudioRef} src={bellMp3} preload="auto" />
          </div>
        </div>
      )}
    </div>
  );
}
