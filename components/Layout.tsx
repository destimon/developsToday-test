import React, { ReactNode } from 'react'
import Head from 'next/head'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ButtonLink from './Widgets/ButtonLink';

type Props = {
  children?: ReactNode
}

const Layout: React.FC<Props> = ({children}) => (
  <div>
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
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/posts/new">New</ButtonLink>
      </Toolbar>
    </AppBar>
    </header>
    {children}
  </div>
)

export default Layout
