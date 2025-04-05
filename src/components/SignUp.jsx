import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect to the home/dashboard page after successful sign-up
    } catch (error) {
      alert(`Sign-up failed: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="max-w-lg w-full p-8 bg-[rgba(0,0,139,0.9)] text-white rounded-lg shadow-lg">
        <h2 className="text-3xl text-center font-bold mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSignUp}>
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
            className="input-field mb-4 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field mb-6 text-white"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full mb-4 py-2 px-6 bg-black text-white font-semibold rounded-lg hover:bg-gray-900"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className= "text-white">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
