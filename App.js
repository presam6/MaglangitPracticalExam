import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { CustomButton } from './components/CustomButton';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
   const [name, setName] = useState('');
   const [course, setCourse] = useState('');
   const [section, setSection] = useState('');
   const [myData, setData] = useState([]);

   const submitData = () => {
    let data = myData;
    myData.push ({
      'names' : name,
      'courses' : course,
      'sections' : section
    })

    setData(data);
    setName('');
    setCourse('');
    setSection(''); 
   }

   const clearData = () => {
    setData([]);
   }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
      <TextInput
      placeholder='Enter Name'
      onChangeText={setName}
      />
      <TextInput
      placeholder='Enter Course'
      onChangeText={setCourse}
      />
      <TextInput
      placeholder='Enter Section'
      onChangeText={setSection}
      />
      </View>

      <View>
        <CustomButton
        title='Add Button'
        onPress={submitData}
        />
        <CustomButton
        title='Clear Button'
        onPress={clearData}
        />
      </View>

      <View style={{flex: 4, borderTopWidth: 1, marginTop: 10}}>
        {
          myData.map((obj, index) => <Text key={index}> { obj.names + ', ' + obj.courses + ', ' + obj.sections } </Text>)
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
});
