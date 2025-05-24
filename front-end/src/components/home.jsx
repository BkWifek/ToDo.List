import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">Welcome to ToDo App</h1>
      <div className="flex gap-4">
        <button
          onClick={() => navigate('/register')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl shadow"
        >
          Register
        </button>
        <button
          onClick={() => navigate('/login')}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-xl shadow"
        >
          Login
        </button>
      </div>
    </div>
  );
}
