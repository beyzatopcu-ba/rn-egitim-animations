/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import SizeAnimation from './src/SizeAnimation';
import LocationAnimation from './src/LocationAnimation';
import SimpleAnimation from './src/SimpleAnimation';
import RotationAnimation from './src/RotationAnimation';
import ParallelAnimation from './src/ParallelAnimation';

const App = props => {
  return (
    <ParallelAnimation />
  )
}

export default App;
