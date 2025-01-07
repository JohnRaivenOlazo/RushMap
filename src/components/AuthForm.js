import useAuth from "../hooks/useAuth";

const AuthForm = ({ isLogin, onSuccess, onError }) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    error,
    handleSubmit,
  } = useAuth(isLogin, onSuccess, onError);

  return (
    <form onSubmit={handleSubmit}>
      {!isLogin && (
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
      )}

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        {isLogin ? "Login" : "Sign Up"}
      </button>
    </form>
  );
};

export default AuthForm
