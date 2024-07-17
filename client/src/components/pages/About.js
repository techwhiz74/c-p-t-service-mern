import React from "react";
import Genesis from "../Genesis/Genesis";
import VideoCard from "../Cards/VideoCards/VideoCard";
import Services from "../Services/Services";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
     <motion.div
   initial={{ opacity: 0, scale: 0.8 }}
   animate={{ opacity: 1, scale: 1 }}
   exit={{ opacity: 0.3, scale: 1.4 }}   transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
    <Genesis/>
      <Services />
      <VideoCard />
    </motion.div>
     
    </>
  );
}
