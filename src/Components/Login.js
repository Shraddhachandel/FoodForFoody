import { useState } from "react";


const Login = () => {
  const [username,setUserName] = useState("");
  const [password,setPassward] = useState("");

  let handleLogin = (e) => {
e.preventDefault();

console.log('Login clicked. Username:', username, 'Password:', password);
  }
  

  return (
    <div className="flex items-center justify-center m-10">
      <div className="bg-gray-100 p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form >
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e)=>setUserName(e.target.value)}
              placeholder="Enter Your Name"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e)=> setPassward(e.target.value)}
              placeholder="Password"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
