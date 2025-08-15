import CrosswordSection from "../components/CrosswordSection";
import { Link } from "react-router-dom";

export default function CrosswordPage() {
  return (
    <div>
      <div className="p-4">
        <Link to="/" className="text-blue-500 underline">&larr; Quay lại</Link>
      </div>
      <CrosswordSection />
    </div>
  );
}
