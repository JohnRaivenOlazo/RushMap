import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import "@/styles/index.css";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function App({ Component, pageProps }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const { data: session } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };

    getSession();

    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    alert('You have been logged out.');
  };

  if (loading) {
    return <div className="text-center text-lg text-white">Loading...</div>;
  }

  return (
    <>
      <Navbar session={session} handleLogout={handleLogout} router={router} />
      <Component {...pageProps} session={session} router={router} />
    </>
  );
}
