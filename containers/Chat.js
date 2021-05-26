import React, {useState} from 'react'
import { Text, TouchableOpacity, ImageBackground, View, ScrollView,  image, StyleSheet, TextInput } from 'react-native';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'

function Chat() {
      const [input, setInput] = useState('')
        const [messages, setMessages] = useState([
              { 
                  
                    name:'Amaka Ike',
                    message:'How far, you no come  again'
              },
              {
                    
                    name:'Amaka Ike',
                    message:'You no try'
              },
              {
                    
                    name:'Amaka Ike',
                    message:'Today na my birthday and you no show up'
              },
              {
                    
                    lastMessage:'Na my brother oh'
              },
        ])

        sendMessage=()=>{
              setMessages([...messages, {message: input}]);
              setInput('')
        }

      return (
            <View style={styles.container}>
            <ScrollView>
                  <Text style={styles.text}> YOU ARE CHATTING WITH </Text>
                  {messages.map((message)=>(
                        message.name ? (
                        <View style={styles.sender}>
                              <Text>{message.name}</Text>
                              <Text>{message.message}</Text>
                        </View>) : (
                              <View style={styles.reciever}>
                              <Text>{message.message}</Text>
                        </View>)
                         ))}
                         </ScrollView>
                        <View style={styles.footer}>
                                    <TextInput placeholder='Your Message' onSubmitEditing={sendMessage} value={input} onChangeText={(text)=>setInput(text)} style={styles.textInput} />
                                    <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
                                          <Ionicons name='send' size={24} color='#2B68EB' />
                                    </TouchableOpacity>
                  </View>
            </View>
      )
}

export default Chat


const styles = StyleSheet.create({
      container:{
            flex:1,
            alignItems:'center'
      },
      footer:{
            flexDirection:'row',
            alignItems:'center',
            width:'100%',
            //marginTop:100
      },
      reciever:{
            padding:10,
            backgroundColor:'#ECECEC',
            alignSelf:'flex-end',
            borderRadius:15,
            marginBottom:20 ,
            marginRight:1,
            maxWidth:'80%',
            position:'relative'
      },
      recieverText:{
            color:'black',
            fontWeight:'400',
            marginLeft:10,
      },
      sender:{
            padding:15,
            backgroundColor:'pink',
            alignItems:'flex-start',
            borderRadius:15,
            margin:15,
            maxWidth:'80%',
            position:'relative'
      },
      senderName:{
            fontSize:10,
            paddingRight:10,
            left:10
      },
      senderText:{
            color:'white',
            fontWeight:'400',
            marginLeft:10,
            marginBottom:15
      },
      text:{
            fontSize:18,
            fontWeight:'bold',
            justifyContent:'center',
            color:'pink'
      },
      textInput:{
            bottom:0,
            height:40,
            color:'blue',
            flex:1,
            borderRadius:30,
            padding:10,
            //margiight:15,
            backgroundColor:'#ECECEC'
      },
})

