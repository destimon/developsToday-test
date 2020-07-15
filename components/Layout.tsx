import React, { ReactNode } from 'react'
import Head from 'next/head'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PostAddIcon from '@material-ui/icons/PostAdd';

type Props = {
  children?: ReactNode
}

const Layout: React.FC<Props> = ({children}) => (
  <div>
    <Head>
      <title>Posts</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </Head>
    <header>
    <AppBar position="static">
      <Toolbar>
        <PostAddIcon />
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
