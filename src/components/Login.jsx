import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import WalletConnect from "../components/WalletComponents"; // moved this to the top

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert(`Login failed: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-lg w-full p-8 bg-[rgba(0,0,139,0.9)] text-white rounded-lg shadow-lg">
        <h2 className="text-3xl text-center font-bold mb-6">Sign In</h2>
        
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="input-field mb-4 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field mb-6 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full mb-4 py-2 px-6 bg-black text-white font-semibold rounded-lg hover:bg-gray-800"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm">
          Don't have an account?{" "}
          <a href="/signup" className="text-white">Sign Up</a>
        </p>

        {/*Wallet connect section */}
        <div className="mt-6">
          <h2 className="text-center font-semibold mb-2">Or login with your wallet</h2>
          <WalletConnect />
        </div>
      </div>
    </div>
  );
};

export default Login;