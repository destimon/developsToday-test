import React from 'react'
import { connect, Provider } from 'react-redux';
import { store } from '../store';
import { AppProps } from 'next/app'

const _app = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <Provider store={store}>
      <Component {...pageProps}></Component>
    </Provider>
  )
}

export default _app
