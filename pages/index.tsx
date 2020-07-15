import Link from 'next/link'
import Layout from '../components/Layout'
import Button from '@material-ui/core/Button';
import withRedux from "next-redux-wrapper";
import makeStore from '../store/index';
import { NextPage, NextPageContext } from 'next';
import { GET_POSTS } from '../store/types';

const IndexPage: NextPage = () => (
  <Layout>
    <h1>Hello!</h1>
  </Layout>
)

IndexPage.getInitialProps = ({store}) => {
  // component will read from store's state when rendered
  store.dispatch({type: GET_POSTS});
  // pass some custom props to component from here
  return {custom: 'custom'}; 
};

export default withRedux(makeStore)(IndexPage);
