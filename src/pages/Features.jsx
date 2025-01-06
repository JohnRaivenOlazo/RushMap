import React from 'react'
import { motion } from 'framer-motion'

const Features = () => {
    return (
        <motion.section
            className="h-screen flex flex-col justify-center items-center px-6 py-16 bg-gradient-to-t from-primaryAccent to-black text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
        </motion.section>
    )
}

export default Features