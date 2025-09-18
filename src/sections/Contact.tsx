
import React from 'react';
import { Box, Grid, Paper, Typography, TextField, Button, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { portfolioData } from '../data/portfolioData';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box sx={{ py: 8 }}>
      <SectionTitle title="Get In Touch" />
      <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={containerVariants}>
        <Paper elevation={3} sx={{ p: { xs: 2, md: 4 } }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography variant="h5" gutterBottom>
                  Contact Information
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  Feel free to reach out to me via email or phone. You can also find me on social media.
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="body1">{portfolioData.contact.email}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="body1">{portfolioData.contact.phone}</Typography>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
                  <IconButton href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" color="primary">
                    <GitHubIcon />
                  </IconButton>
                  <IconButton href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" color="primary">
                    <LinkedInIcon />
                  </IconButton>
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography variant="h5" gutterBottom>
                  Send Me a Message
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                  <Stack spacing={2}>
                    <TextField label="Your Name" variant="outlined" required />
                    <TextField label="Your Email" variant="outlined" type="email" required />
                    <TextField label="Message" variant="outlined" multiline rows={4} required />
                    <Button variant="contained" size="large" type="submit">
                      Send Message
                    </Button>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Contact;
