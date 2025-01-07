import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const useAuth = (isLogin, onSuccess, onError) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const method = isLogin ? "signInWithPassword" : "signUp";
    const data = isLogin ? { email, password } : { email, password, options: { data: { display_name: username } } };

    const { user, error: authError } = await supabase.auth[method](data);
    if (authError) {
      setError(authError.message);
      onError(authError);
    } else {
      onSuccess();
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    error,
    handleSubmit,
  };
};

export default useAuth;
