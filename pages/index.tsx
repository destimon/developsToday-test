import Layout from '../components/layouts/DefaultLayout'
import { NextPage } from 'next';
import { connect } from 'react-redux';
import { StoreState } from '../store/types';
import Posts from '../components/Post/Posts'
import { Container, Typography, Divider } from '@material-ui/core';

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <Container>
        <Typography variant="h3" component="h2">Latest posts</Typography>
        <Divider></Divider>
        <Posts />
      </Container>
    </Layout>
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   ({store}) => {
//     console.log('2. Page.getServerSideProps uses the store to dispatch things');
//     store.dispatch(getPostsAsync());
//   }
// );

export default connect((state: StoreState) => state)(IndexPage);