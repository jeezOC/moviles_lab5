import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import * as React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useLocalSearchParams } from "expo-router";
import { useRoute } from '@react-navigation/native';

export default function ModalScreen() {
  const route = useRoute();
  const { generatedMessage } = useLocalSearchParams<{
    generatedMessage?: string;
  }>();
  const decodedMessage = generatedMessage ? decodeURIComponent(generatedMessage) : '';
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Awaesome Pitch</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo generatedMessage={decodedMessage} />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
