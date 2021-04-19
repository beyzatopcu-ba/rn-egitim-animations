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
import OtherComposedAnimations from './src/OtherComposedAnimations';
import { Platform, UIManager } from 'react-native';
import LayoutAnimationExample from './src/LayoutAnimationExample';
import Exercise1_Solution from './src/Exercise1_Solution';
import Exercise2_Solution from './src/Exercise2_Solution';
import SlidingUnderline from './src/SlidingUnderline';
import VoiceRecording from './src/VoiceRecording';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = props => {
  return (
    <VoiceRecording />
  )
}

export default App;
