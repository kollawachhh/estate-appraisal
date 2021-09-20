import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const BODY_COLOR = '#000022', TEXT_PRIMARY = '#882288';

const constants = {
  BODY_COLOR, TEXT_PRIMARY,
};

const bootstrapStyleSheet = new BootstrapStyleSheet(constants);
const { styles: s, constants: c } = bootstrapStyleSheet;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Estate appraisal system</Text>
      </View>
      <View style={s.body}>
        <Text style={[s.text, s.textPrimary]}>Initialize the project!</Text>
        <Text>Subject : System Analysis</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor:'red',
    padding:20,
  },
  boldText:{
    fontWeight: 'bold'
  },
  body:{
    backgroundColor:'pink',
    alignItems: 'center',
    padding:20,
  },
});
