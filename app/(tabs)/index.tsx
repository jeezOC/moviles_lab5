import { StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useState } from 'react';
import Colors from '../../constants/Colors';
import { RadioButton } from 'react-native-paper';

export default function TabOneScreen() {
  const [text, onChangeText] = useState('Useless Text');
  const [checked, setChecked] = useState('first');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generate your Pitch</Text>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>What is your bussiness about</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Public</Text>
          <View style={{...styles.hContainer, width:'100%'}} >
            <View style={styles.hContainer}>
              <Text style={styles.label}>kids</Text>
              <RadioButton
                value="kids"
                color='#2e3440'
                status={checked === 'kids' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />
            </View>
            <View style={styles.hContainer}>
              <Text style={styles.label}>teenagers</Text>
              <RadioButton
              color='#2e3440'
                value="teenagers"
                status={checked === 'teenagers' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
              />
            </View>
            <View style={styles.hContainer}>
              <Text style={styles.label}>adults</Text>
              <RadioButton
              color='#2e3440'
                value="adults"
                status={checked === 'adults' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
              />
            </View>
            <View style={styles.hContainer}>
              <Text style={styles.label}>all</Text>
              <RadioButton
              color='#2e3440'
                value="all"
                status={checked === 'all' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
              />
            </View>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Label</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Label</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
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
