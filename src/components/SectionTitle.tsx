
import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box ref={ref} sx={{ my: 5, textAlign: 'center' }}>
      <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Box sx={{ height: 4, width: 60, backgroundColor: 'primary.main', margin: '0 auto' }} />
      </motion.div>
    </Box>
  );
};

export default SectionTitle;
