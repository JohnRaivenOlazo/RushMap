import { useRouter } from "next/router";
import AuthForm from "@/components/AuthForm";

const SignUp = () => {
  const router = useRouter();

  const onSuccess = () => {
    alert("Sign Up Successful. Please check your email.");
    router.push("/");
  };
  const onError = (error) => console.error(error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <AuthForm isLogin={false} onSuccess={onSuccess} onError={onError} />

        <div className="mt-4 text-center">
          <button
            onClick={() => router.push("/login")}
            className="text-blue-500 hover:text-blue-700"
          >
            Already have an account? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
