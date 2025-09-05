import { useNavigate } from "react-router-dom";

export default function Button({ to, children }) {
  const navigate = useNavigate();

  return (
    <button
      className="bg-pink-400 text-white px-10 py-2 rounded-lg mt-6"
      onClick={() => navigate(to)}
    >
      {children}
    </button>
  );
}
