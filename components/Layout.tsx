import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonLink from './Widgets/ButtonLink';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

type Props = {
  children?: ReactNode
}

const Layout: React.FC<Props> = ({children}) => (
  <div>
    <Head>
      <title>Posts</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          Blog
        </Typography>
      </Toolbar>
    </AppBar>
    </header>
    {children}
  </div>
)

export default Layout
