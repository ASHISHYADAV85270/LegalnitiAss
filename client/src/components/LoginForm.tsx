import React, { useState } from "react";

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [password, setPassword] = useState<string>("");
  const [useremail, setEmail] = useState<string>("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(useremail, password);
    setPassword("");
    setEmail("");
  };
  return (
    <form onSubmit={handleLogin}>
      <div>
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          UserEmail:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={useremail}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mt-4"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
