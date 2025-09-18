
import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { portfolioData } from '../data/portfolioData';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        position: 'relative',
        py: 8,
      }}
    >
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: (theme) =>
            `radial-gradient(circle, ${theme.palette.primary.dark} 0%, ${theme.palette.background.default} 70%)`,
          opacity: 0.3,
          zIndex: -1,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <Container maxWidth="md">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <Typography variant="h1" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
              Hi, I'm {portfolioData.name}
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4, maxWidth: '700px', margin: '0 auto 32px' }}>
              {portfolioData.summary}
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                component={Link}
                to="projects"
                spy
                smooth
                offset={-70}
                duration={500}
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="contact"
                spy
                smooth
                offset={-70}
                duration={500}
              >
                Get In Touch
              </Button>
            </Stack>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
