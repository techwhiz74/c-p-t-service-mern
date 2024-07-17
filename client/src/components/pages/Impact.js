import React from 'react';
import '../../App.css';
import ImpactCounter from '../Impact/ImpactCounter';
import Testimonials from '../Testimonials/Testimonials';
import Hightlighs from '../slider/Highlights/Hightlighs';
import { motion } from 'framer-motion';

export default function Impact() {
  return (
    <>
     <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0.3, scale: 1.4 }}        transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
        <ImpactCounter/>
        <Hightlighs/>
        <Testimonials/>
        </motion.div>
    </>
  );
}
