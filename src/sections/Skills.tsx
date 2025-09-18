
import React from 'react';
import { Box, Chip, Paper, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { portfolioData } from '../data/portfolioData';

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Box sx={{ py: 8 }}>
      <SectionTitle title="Skills" />
      <Paper
        elevation={3}
        sx={{ p: 4, backgroundColor: (theme) => theme.palette.background.paper }}
      >
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <Grid container spacing={2} justifyContent="center">
            {portfolioData.skills.map((skill, index) => (
              <Grid item key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  <Chip
                    label={skill}
                    color="primary"
                    variant="outlined"
                    sx={{
                      fontSize: '1rem',
                      padding: '1.5rem 1rem',
                      borderColor: 'primary.main',
                      borderWidth: '2px',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                      },
                    }}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Paper>
    </Box>
  );
};

export default Skills;
