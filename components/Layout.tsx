import React, { Fragment, ReactNode } from 'react'
import Head from 'next/head'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { Button } from '@material-ui/core';
import Router from 'next/router';

type Props = {
  children?: ReactNode
}

const Layout: React.FC<Props> = ({children}) => (
  <Fragment>
    <Head>
      <title>Blog</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
    <AppBar position="static">
      <Toolbar>
        <PostAddIcon />
        <Typography variant="h6">
          Blog
        </Typography>
        <Button onClick={() => {Router.push('/')}}>Home</Button>
        <Button onClick={() => {Router.push('/posts/new')}}>New post</Button>
      </Toolbar>
    </AppBar>
    </header>
    {children}
  </Fragment>
)

export default Layout
