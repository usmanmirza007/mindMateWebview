

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { WebView } from 'react-native-webview';
const App: () => React$Node = () => {
  return (
    <WebView
        source={{
          uri: 'https://www.mindmate-app.com/'
        }}
        style={{ marginTop: 0 }}
      />
  );
};

const styles = StyleSheet.create({
 
});

export default App;
