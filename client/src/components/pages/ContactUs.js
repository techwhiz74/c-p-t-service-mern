import React from 'react';
import '../../App.css';
import Getinv from '../Cards/GetInvolved/Getinv';
import Contact from '../Forms/contact/Contact';
import { motion } from 'framer-motion';

export default function ContactUs() {
  return (
  <>
   <motion.div
       initial={{ opacity: 0, scale: 0.8 }}
       animate={{ opacity: 1, scale: 1 }}
       exit={{ opacity: 0.3, scale: 1.4 }}       transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
    <Getinv />
    <Contact/>
    </motion.div>
  </>);
}
