
import React from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { portfolioData } from '../data/portfolioData';
import SchoolIcon from '@mui/icons-material/School';

const Education: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <Box sx={{ py: 8 }}>
      <SectionTitle title="Education" />
      <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
          }}
        >
          <SchoolIcon sx={{ fontSize: 80, color: 'primary.main' }} />
          <Box>
            {portfolioData.education.map((edu, index) => (
              <Box key={index}>
                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                  {edu.degree}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
                  {edu.institution}
                </Typography>
                <Grid container sx={{ mt: 2 }}>
                  <Grid item xs={6}>
                    <Typography variant="body1">
                      <strong>Period:</strong> {edu.period}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">
                      <strong>CGPA:</strong> {edu.cgpa}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Education;
