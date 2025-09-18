
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Modal,
  Box,
  Stack,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveDemo: string;
  sourceCode: string;
}

interface ProjectCardProps {
  project: Project;
}

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '70%', md: '50%' },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <motion.div whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.3 } }}>
        <Card
          onClick={handleOpen}
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            cursor: 'pointer',
            border: '1px solid transparent',
            '&:hover': {
              borderColor: 'primary.main',
            },
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>
          <CardActions sx={{ p: 2 }}>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 0.5 }}>
              {project.technologies.map((tech, index) => (
                <Chip key={index} label={tech} size="small" />
              ))}
            </Stack>
          </CardActions>
        </Card>
      </motion.div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
      >
        <Box sx={modalStyle}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography id="project-modal-title" variant="h4" component="h2" sx={{ mb: 2 }}>
            {project.title}
          </Typography>
          <Typography id="project-modal-description" sx={{ mb: 3 }}>
            {project.description}
          </Typography>
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 0.5, mb: 4 }}>
            {project.technologies.map((tech, index) => (
              <Chip key={index} label={tech} color="primary" />
            ))}
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              startIcon={<OpenInNewIcon />}
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </Button>
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default ProjectCard;
