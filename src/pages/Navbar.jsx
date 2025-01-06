import { motion } from "framer-motion"

const Navbar = (props) => {
  const { session, handleLogout, router } = props

  return (
    <motion.nav
    className="fixed top-0 left-0 right-0 px-6 py-4 flex justify-between items-center bg-transparent text-white shadow-xl z-[999] border-b-[1px] border-opacity-50 border-b-light border-b-opacity-5"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
  >
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-[-1]" />
    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-[#0072ff] to-[#00c6ff] align-middle cursor-pointer">
    <img src="/logo.png" alt="RushMap Logo" className="w-6 h-6 inline-block mr-2" /> RushMap</h1>
    <div className="flex items-center gap-5">
      {session && <p className="text-sm font-medium">Welcome, <span className="font-bold">{session.user?.user_metadata?.display_name}</span>!</p>}
      {session ? (
        <button
          onClick={handleLogout}
          className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white py-1 px-5 rounded-md text-sm font-semibold hover:scale-105 transition-all duration-300 ease"
        >
          Logout
        </button>
      ) : (
        <div className="flex space-x-3">
          <button
            onClick={() => router.push('/login')}
            className="bg-transparent text-white py-1 px-3 rounded-md text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300 ease"
          >
            Login
          </button>
          <button
            onClick={() => router.push('/signup')}
            className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white py-1 px-5 rounded-md text-sm font-semibold hover:scale-105 transition-all duration-300 ease"
          >
            Sign Up
          </button>
        </div>
      )}
    </div>
  </motion.nav>
  )
}

export default Navbar