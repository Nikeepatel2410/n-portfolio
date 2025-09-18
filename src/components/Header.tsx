
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-scroll';
import { Brightness4, Brightness7, Menu as MenuIcon } from '@mui/icons-material';
import { useThemeContext } from '../theme/ThemeContext';
import { portfolioData } from '../data/portfolioData';

const navLinks = [
  { title: 'Experience', to: 'experience' },
  { title: 'Skills', to: 'skills' },
  { title: 'Projects', to: 'projects' },
  { title: 'Contact', to: 'contact' },
];

const Header: React.FC = () => {
  const { mode, toggleTheme } = useThemeContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {portfolioData.name}
      </Typography>
      <List>
        {navLinks.map((item) => (
          <ListItem button key={item.title} component={Link} to={item.to} spy smooth offset={-70} duration={500}>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          <Link to="hero" spy smooth offset={-70} duration={500} style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
            {portfolioData.name}
          </Link>
        </Typography>

        {isMobile ? (
          <>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box>
            {navLinks.map((item) => (
              <Button
                key={item.title}
                color="inherit"
                component={Link}
                to={item.to}
                spy
                smooth
                offset={-70}
                duration={500}
                sx={{ margin: '0 10px' }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        )}

        <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
          {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
