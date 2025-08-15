import MiniGame from "../components/MiniGameSection";
import { Link } from "react-router-dom";

export default function EssayPage() {
  return (
    <div>
      <div className="p-4">
        <Link to="/" className="text-blue-500 underline">&larr; Quay lại</Link>
      </div>
      <MiniGame />
    </div>
  );
}
