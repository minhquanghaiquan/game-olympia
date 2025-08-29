import { Link } from "react-router-dom";
import schoolLogo from "../assets/logo_shool.jpg";
import Banner from "./Banner";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white shadow flex items-center gap-4 px-6 py-3">
        <img src={schoolLogo} alt="School Logo" className="w-16 h-16 rounded-full" />
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-900">
            Hội thi Olympic các môn khoa học Mác - Lênin,
          </h1>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-900">
            tư tưởng Hồ Chí Minh và nhận thức chính trị - xã hội năm 2025
          </h1>
          {/* <p className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-wide italic">
            Các môn khoa học Mác - Lênin, tư tưởng Hồ Chí Minh & Nhận thức chính trị – xã hội
          </p> */}
        </div>
      </header>

      {/* Banner */}
      <div className="w-full">
        <Banner />
      </div>

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center flex-grow py-12 bg-gradient-to-b from-[#f0f4ff] to-[#fff]">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-12 text-center">
          Chọn phần thi của bạn
        </h2>

        <div className="flex flex-col sm:flex-row gap-6">
          <Link to="/essay">
            <button className="w-60 sm:w-72 h-24 sm:h-28 bg-yellow-400 hover:bg-yellow-500 text-2xl sm:text-3xl font-bold rounded-xl shadow-xl transition">
              Trả lời câu hỏi<br />
              tự luận bắt buộc
            </button>
          </Link>
          <Link to="/mcq">
            <button className="w-60 sm:w-72 h-24 sm:h-28 bg-blue-400 hover:bg-blue-500 text-2xl sm:text-3xl font-bold rounded-xl shadow-xl transition">
              Trắc nghiệm
            </button>
          </Link>
          <Link to="/crossword">
            <button className="w-60 sm:w-72 h-24 sm:h-28 bg-red-400 hover:bg-red-500 text-2xl sm:text-3xl font-bold rounded-xl shadow-xl transition">
              Giải ô chữ
            </button>
          </Link>

          <Link to="">
            <button className="w-60 sm:w-72 h-24 sm:h-28 bg-green-400 hover:bg-red-500 text-2xl sm:text-3xl font-bold rounded-xl shadow-xl transition">
              Hùng biện <br />
              theo chủ đề
            </button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-3 text-center text-sm text-gray-600">
        <p style={{ fontWeight: 'bold' }}>
          © 2025 Trường Cao đẳng Kỹ thuật Hải quân
        </p>
        <p style={{ fontWeight: 'bold' }}>
          Design by: Đại uý Nguyễn Minh Quang - TTRĐ
        </p>
      </footer>
    </div>
  );
}
