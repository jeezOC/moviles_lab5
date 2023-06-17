import { Button, StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from './EditScreenInfo';
import { Text, View } from './Themed';
import React, { useState } from 'react';
import Colors from '../constants/Colors';
import { RadioButton } from 'react-native-paper';
import { API_KEY, API_URL } from '@env';

const PublicRadioGroup = (props: any) => {
  const { label, itemChecked, setItemChecked, items } = props;

  return (<View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <View style={{ ...styles.hContainer, width: '100%' }} >
      {items && items.map((item: string, i: number) => {
        return (
          <View key={i} style={styles.hContainer}>
            <Text style={styles.label}>{item}</Text>
            <RadioButton
              value={item}
              color='#2e3440'
              status={itemChecked === item ? 'checked' : 'unchecked'}
              onPress={() => setItemChecked(item)}
            />
          </View>
        )
      })}
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e3440',
    paddingLeft: 5
  },
  separator: {
    marginVertical: 5,
    height: 1,
    width: '80%',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 10,
  },
  hContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

  },
  input: {
    // height: '100%',
    marginVertical: 1,
    color: '#ffffff',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#2e3440'

  },
});

export default PublicRadioGroup;