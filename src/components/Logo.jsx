import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <Link to="/" className="text-2xl font-bold">
        <img src="/logo.png" alt="Logo" className="h-[32px] w-[160px]" />
      </Link>
    </div>
  );
}
