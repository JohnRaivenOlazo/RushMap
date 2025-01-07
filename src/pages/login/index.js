import { useRouter } from "next/router";
import AuthForm from "@/components/AuthForm";

const Login = ({ session }) => {
  const router = useRouter();

  const onSuccess = () => alert("Login Successful");
  const onError = (error) => console.error(error);

  if (session) {
    router.push("/");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <AuthForm isLogin={true} onSuccess={onSuccess} onError={onError} />

        <div className="mt-4 text-center">
          <button className="text-blue-500 hover:text-blue-700" onClick={() => router.push("/signup")}>
            Don't have an account? Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login
