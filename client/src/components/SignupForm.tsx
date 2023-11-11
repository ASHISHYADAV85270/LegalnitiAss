// SignupForm.tsx

import React, { useState } from "react";

interface SignupFormProps {
  onSignup: (username: string, password: string, email: string) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSignup }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [useremail, setemail] = useState<string>("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup(username, password, useremail);
    setUsername("");
    setemail("");
    setPassword("");
  };
  return (
    <form onSubmit={handleSignup}>
      <div>
        <label
          htmlFor="fullName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          UserName:
        </label>
        <input
          type="text"
          name="fullName"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <div>
        <label
          htmlFor="signup-useremail"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          UserEmail:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={useremail}
          onChange={(e) => setemail(e.target.value)}
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
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mt-4"
      >
        SignUp
      </button>
    </form>
  );
};

export default SignupForm;
