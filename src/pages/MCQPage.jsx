import MCQSection from "../components/MCQSection";
import { Link } from "react-router-dom";

export default function MCQPage() {
  return (
    <div>
      <div className="p-4">
        <Link to="/" className="text-blue-500 underline">&larr; Quay lại</Link>
      </div>
      <MCQSection />
    </div>
  );
}
