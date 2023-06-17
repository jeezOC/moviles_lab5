import { Button , StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useState } from 'react';
import Colors from '../../constants/Colors';
import {RadioButton } from 'react-native-paper';
import { API_KEY, API_URL } from '@env';

export default function TabOneScreen() {
  const [textAbout, onChangeText] = useState('Useless Text');
  const [checked, setChecked] = useState('first');
  const [duracion, setDuracion] = useState("");
  const [sector, setSector] = useState('productos');
  const [name, setName] = useState('');
  const promptText = 'create an small pitch for a bussiness whith the following information: \n\n';
  const apiUrl = API_URL;
  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`, // replace $OPENAI_API_KEY with your actual key
        },
        body: JSON.stringify({
          "model": "gpt-3.5-turbo",
          "messages": [{"role": "user", "content": `${promptText}`}],
          "temperature": 0.7
        }),
      });
      
      const json = await response.json();
      const generatedMessage = json.choices[0].message.content;
      console.log(generatedMessage);
    } catch (error) {
      console.error(error);
    }
  };



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
            value={textAbout}
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
          <Text style={styles.label}>Duración en minutos</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => setDuracion(texto)}
            value={duracion}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>name your bussiness</Text>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
          />
        </View>

        <Text style={styles.label}>Which sector is your bussiness</Text>
                <RadioButton
                color='#2e3440'
                  value={sector}
                  status={sector === 'services' ? 'checked' : 'unchecked'}
                  onPress={() => setSector('products')}
                />
            </View>
            <View style={styles.hContainer}>
              <Text style={styles.label}>services</Text>
              <RadioButton
              color='#2e3440'
              value={sector}
                status={sector === 'products' ? 'checked' : 'unchecked'}
                onPress={() => setSector('products')}
              />
            </View>
            <Button title='Generate' onPress={() => fetchData()} />
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
