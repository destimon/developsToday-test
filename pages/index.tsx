import Layout from '../components/Layout'
import { NextPage } from 'next';
import { connect } from 'react-redux';
import { State } from '../store/types';
import Posts from '../components/Post/Posts'
import { Container } from '@material-ui/core';

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <Container>
        <h1>Posts page</h1>
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

export default connect((state: State) => state)(IndexPage);