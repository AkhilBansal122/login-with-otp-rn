import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';


const Home = () => {
    const [confirm, setConfirm] = useState(null);

    const [code, setCode] = useState('');
  
    async function signInWithPhoneNumber(phoneNumber) {
        console.log(phoneNumber);

        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        console.log("Res::",confirmation);
        setConfirm(confirmation);
      }
      
      async function confirmCode() {
        try {
         await confirm.confirm(code);
          console.log("confirms");
        } catch (error) {
          console.log('Invalid code.');
        }
      
    
    }

    if (!confirm) {
        return (
          <Button
            title="Phone Number Sign In"
            onPress={() => signInWithPhoneNumber('+91 882-984-2472')}
          />
        );
      }
    
      
  
  return (
    <View >
    <TextInput value={code} onChangeText={text => setCode(text)} style={{borderRadius:10,borderColor:'%000',borderWidth:5}} />
    <Button title="Confirm Code" onPress={() => confirmCode()} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})