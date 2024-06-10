import React from "react";
import { motion } from "framer-motion";

const ImageTextComponent = () => {
  return (
    <>
      <motion.img
        src="https://images.unsplash.com/photo-1606814540563-5c02d62fd409?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHx0ZWNobm9sb2d5fGVufDB8fDB8fHww"
        className="w-full object-cover rounded-2xl mb-40"
        alt="Sample Image 1"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      />
      <div
        className="bg-gray-800 p-20 rounded-2xl"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h3
          className="text-3xl font-bold mb-20 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Anti 0
        </motion.h3>
        <motion.p
          className="text-lg text-gray-400 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Our first Indigenously developed solution against Artificial
          Intelligence, capable of mitigating browser-based threats from any
          system.
        </motion.p>
      </div>
    </>
  );
};

export default ImageTextComponent;
