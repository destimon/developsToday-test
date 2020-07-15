import Link from 'next/link'
import Layout from '../components/Layout'
import withRedux from "next-redux-wrapper";
import {wrapper} from '../store/index';
import { NextPage } from 'next';
import { getPostsAsync } from '../store/actions/postActions';
import { connect, Provider } from 'react-redux';
import { State } from '../store/types';
import { useEffect } from 'react';

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <h1>Hello!</h1>
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