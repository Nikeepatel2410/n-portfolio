
import React from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { portfolioData } from '../data/portfolioData';
import WorkIcon from '@mui/icons-material/Work';

const Experience: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8 }}>
      <SectionTitle title="Work Experience" />
      <Timeline position="alternate">
        {portfolioData.experience.map((item, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          const variants = {
            hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          };

          return (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align={index % 2 === 0 ? 'right' : 'left'}
                variant="body2"
                color="text.secondary"
              >
                {item.period}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants}>
                  <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography variant="h6" component="h1">
                      {item.role}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {item.company}
                    </Typography>
                    <Typography>{item.description}</Typography>
                  </Paper>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Box>
  );
};

export default Experience;
