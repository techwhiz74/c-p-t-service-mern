import React from 'react';
import '../../App.css';
import Hero from '../Hero/Hero';
import BackgroundSlider from '../slider/BackgroundSlider';
import NewsCard from '../Cards/News/NewsCard';
import Partners from '../slider/Partners/Partners';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
     <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0.3, scale: 1.4 }}        transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <Hero/>
      <BackgroundSlider/>
      <NewsCard/>
      <Partners />
      </motion.div>
    </>
  );
}
