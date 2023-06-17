import React, { useState } from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import PublicRadioGroup from '../components/PublicRadioGroup';
import SelectDropdown from 'react-native-select-dropdown'
import { API_KEY, API_URL } from '@env';
import { useRouter } from "expo-router";

export default function TabOneScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [textAbout, onChangeText] = useState('Useless Text');
  const [publicMeta, setPublicMeta] = useState('everyone');
  const [language, setLanguage] = useState("");
  const [sector, setSector] = useState('productos');
  const promptText = `
  Genera un elevator pitch para compartir un breve resumen acerca de una nueva idea de negocio, Toma en consideracion las siguientes caracteristicas:
    - El nombre del negocio es ${name}  
    - El negocio es sobre ${textAbout}
    - El negocio va dirigido a ${publicMeta}
    - El negocio esta ambientando en ${sector}
    - El pitch debe ser en el idioma ${language}
  Ademas el elevator pitch debe tener las siguientes secciones:
    - Una breve presentacion personal
    - Una breve presentacion del problema
    - Presentacion de una solucion
    - Una propuesta de valor
    - Y un llamado a la accion
  El discurso no deberia de durar mas de 30 segundos.
  `;
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
          "messages": [{ "role": "user", "content": `${promptText}` }],
          "temperature": 0.7
        }),
      });

      const json = await response.json();
      const generatedMessage = json.choices[0].message.content;
      console.log(generatedMessage);
      router.push(`/modal/?generatedMessage=${generatedMessage}`);
    } catch (error) {
      console.error(error);
    }
  };


  const publicItems = ['kids', 'teenegers', 'adults', 'everyone'];
  const sectorItems = ['services', 'products',]
  const languageItems = ['Espanol', 'English', 'French', 'Dutch']
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generate your Elevator Pitch</Text>
      <View style={styles.container}>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name your bussiness</Text>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>What is your bussiness about</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={textAbout}
          />
        </View>

        <PublicRadioGroup label={'Public Meta'} itemChecked={publicMeta} setItemChecked={setPublicMeta} items={publicItems} />
        <PublicRadioGroup label={'Sector Bussiness'} itemChecked={sector} setItemChecked={setSector} items={sectorItems} />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Select a language for your Pitch</Text>
          <View style={{...styles.hContainer, width:'100%',}}>
            <SelectDropdown
              data={languageItems}
              onSelect={(selectedItem, index) => {
                setLanguage(selectedItem);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
            />
          </View>
        </View>
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
