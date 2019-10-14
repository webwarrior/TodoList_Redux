/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';


import TodoApp from './src/TodoApp';
import store from './src/store';
import { Provider } from 'react-redux'; 
import Header from './src/components/Header';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Header />
      <TodoApp></TodoApp>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
