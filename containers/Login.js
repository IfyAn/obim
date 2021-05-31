import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,  ImageBackground, TouchableOpacity} from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView } from 'react-native'
import { auth } from '../firebase'

const Login = ({ navigation }) => {

      const [email, setEmail]= useState('')
      const [password, setPassword] = useState('')

      useEffect(() => {
            const unsubscribe = auth.onAuthStateChanged((authUser)=>{
                  if(authUser){
                        navigation.replace('Home')
                  }
            })
             return unsubscribe
      }, [])

    const signIn=()=>{
            auth.signInWithEmailAndPassword(email, password)
            .catch((error)=>alert(error))
      }
      return (
            <KeyboardAvoidingView behavio='padding' style={styles.container}>
                  <ImageBackground source ={{
                  uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWq5aTHic3HmeZ3cZzsV-0q8Fz4LUeb0gCA&usqp=CAU'}}   style={styles.image}>
                  <StatusBar style='light' />

                  <View style={styles.inputContainer}>
                        <Input placeholder='Email' type='email' value={email} onChangeText={text=>setEmail(text)} />
                        <Input placeholder='password' secureTextEntry type='password' value={password} onChangeText={text=>setPassword(text)} onSubmitEditing={signIn} />
                  </View>
                  
                  <Button onPress={()=>navigation.navigate('Login')} containerStyle={styles.button} title='Login'   />
                  <Button onPress={()=>navigation.navigate('Register')} containerStyle={styles.button} title='Register' type='outline' />
                  <View style={{height:200}} />
                  </ImageBackground>
            </KeyboardAvoidingView>
      )
}

export default Login

const styles = StyleSheet.create({
      button:{
            width:200,
            marginTop:10
      },
      buttonStyle:{
            width:200,
            marginTop:0
      },
      container: {
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
          },
          image: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center",
            alignItems: 'center',
          },
          inputContainer:{
                width:300,
          },
})
