import Layout from '../components/layouts/DefaultLayout'
import { NextPage } from 'next';
import { connect } from 'react-redux';
import { StoreState } from '../store/types';
import PostsContainer from '../containers/PostsContainer'
import { Container, Typography, Divider } from '@material-ui/core';

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <Container>
        <Typography variant="h3" component="h2">Latest posts</Typography>
        <Divider></Divider>
        <PostsContainer />
      </Container>
    </Layout>
  )
}

export default connect((state: StoreState) => state)(IndexPage);