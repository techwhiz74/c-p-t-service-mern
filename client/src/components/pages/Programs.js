import React from 'react';
import '../../App.css';
import ProgramsC from '../ProgramsC/ProgramsC';
import Faq from '../FAQ/Faq';
import { motion } from 'framer-motion';

export default function Programs() {
  return (
    <>
     <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0.3, scale: 1.4 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
    <ProgramsC/>
    <Faq/>
    </motion.div>
    </>
  ) ;
}
