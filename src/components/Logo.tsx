import React from "react";
import { motion } from "framer-motion";
import config from "../config/index.json";

const Logo = () => {
  const { org } = config;
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <motion.div
        className="relative m-0 w-3/4 h-2/12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ x: 100 }}
        transition={{ delay: 1 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileFocus={{ scale: 1.2, transition: { duration: 1 } }}
      >
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={org.logo}
          alt="nedaa logo"
        />
      </motion.div>
    </div>
  );
};

export default Logo;
