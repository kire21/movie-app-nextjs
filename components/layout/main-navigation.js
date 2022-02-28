import React, { useState } from 'react';
import Link from 'next/link';
import { useMovieContext } from '../../store/movie-context';

import {
  AppBar,
  Toolbar,
  Container,
  Hidden,
  Typography,
  Divider,
  List,
  ListItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import classes from './main-navigation.module.css';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Random Movie', href: '/random-movie' },
  { name: 'Contact', href: '/contact' },
];

function MainNavigation() {
  const [open, setOpen] = useState(false);
  const { movies } = useMovieContext();

  return (
    <AppBar className={classes.nav} position='sticky'>
      <Container maxWidth='md'>
        <Toolbar disableGutters>
          <Typography className={classes.logo}>Movie App</Typography>
          <Hidden smDown>
            {navigationLinks.map((item) => {
              return (
                <Link
                  key={item.name}
                  style={{ textDecoration: 'none' }}
                  className={classes.link}
                  href={item.href}
                >
                  {item.name}
                </Link>
              );
            })}
          </Hidden>
          <Hidden smUp>
            <IconButton color='inherit'>
              <MenuIcon onClick={() => setOpen(true)} />
            </IconButton>
          </Hidden>
          <Typography className={classes.count__movies}>
            You have watched: {!movies.length ? 0 : movies.length} movies
          </Typography>
        </Toolbar>
      </Container>
      <SwipeableDrawer
        className='drawer'
        anchor='right'
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div>
          <IconButton>
            <ChevronRightIcon color='inherit' onClick={() => setOpen(false)} />
          </IconButton>
        </div>

        <Divider />
        <List>
          {navigationLinks.map((item) => {
            return (
              <ListItem key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </ListItem>
            );
          })}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}

export default MainNavigation;
