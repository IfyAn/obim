import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, View, ImageBackground, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Button, Input, Text } from 'react-native-elements'
import { auth } from '../firebase'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

export default function Register({navigation}) {

      const [name, setName] = useState('')
      const [email, setEmail]= useState('')
      const [password, setPassword] = useState('')
      const [imageUrl, setImageUrl]= useState('')

      // useLayoutEffect(()=>{
      //       navigation.setOptions({
      //             headerBackTitle:'Login'
      //       })
      // },[navigation])

      const register=()=>{
            auth
            .createUserWithEmailAndPassword(email, password)
            .then((authUser)=>{
                  authUser.user.updateProfile({
                        displayName:name,
                        photoURL: imageUrl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoIDXyzOZLnjyOUdhtq-_gcvrV6F_jISot4Q&usqp=CAU'
                  })
            })
            .catch((error)=>alert(error.message))
      }

      const getPermission=async()=>{
            if(Platform.OS !=='web'){
                  //const { status } = await Permissions.askAsync(Permissions.CAMERA)
                  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

                  return status
            }
      }

      const pickImage=async()=>{
            try{
                  let result = await ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.All,
                        allowsEditing: true,
                        aspect: [4, 3],
                        quality: 1,
                      });
                  
                      console.log(result);
                  
                      if (!result.cancelled) {
                        setImageUrl(result.uri);
                      }

            } catch(error) {
                  console.log('Error @pickImage:', error);
            }
      }

      const addImage=async()=>{
            const status = await getPermission()

            if(status !=='granted'){
                  alert('We need permision to access your camera')

                  return
            }

            pickImage()
      }

      return (
               <KeyboardAvoidingView behavio='padding' style={styles.container}>
                  <ImageBackground source ={{
                  uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikbjB6H31lzZsHs9kL2r8GUbe3No3N9MBZA&usqp=CAU'}}
                   style={styles.image}>
                  <StatusBar style='light' />
                  <TouchableOpacity onPress={addImage}>
                        {imageUrl ? (
                              <Image source={{uri:imageUrl}} style={styles.avatar} /> 
                        ) : (
                              <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWq5aTHic3HmeZ3cZzsV-0q8Fz4LUeb0gCA&usqp=CAU"}} style={styles.avatar} /> 
                        )}
                  </TouchableOpacity>
                 <Text h3 style={{marginBottom:10}}>Create An Account To </Text>
                  <ScrollView style={styles.inputContainer}>
                        <Input placeholder='Full Name' type='text' value={name} onChangeText={text=>setName(text)} />
                        <Input placeholder='Email' type='email' value={email} onChangeText={text=>setEmail(text)} />
                        <Input placeholder='Password' secureTextEntry type='password' value={password} onChangeText={text=>setPassword(text)} />
                        <Input placeholder='Profile Picture UrL (optional)' type='text' value={imageUrl} onChangeText={text=>setImageUrl(text)} onSubmitEditing={register} />
                  </ScrollView>
                  <Button raised onPress={register} containerStyle={styles.button} title='Register'  />
                  <Button onPress={()=>navigation.navigate('Login')} containerStyle={styles.button} title='Login' type='outline'  />
                  <View style={{height:20}} />
                  </ImageBackground>
            </KeyboardAvoidingView>
      )
}

const styles = StyleSheet.create({
      avatar:{
            width:100,
            height:100,
            borderRadius:100,
            paddingTop:10
      },
      button:{
            width:200,
            marginTop:10
      },
      container: {
            flex: 1,
            backgroundColor: '#fff',
            //padding:10,
            justifyContent: 'center',
            //alignItems:'center',
                   
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
