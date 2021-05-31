import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react'
import { Text, TouchableOpacity, ImageBackground, View, ScrollView,  image, StyleSheet, TextInput } from 'react-native';
import { Avatar } from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat'
import { auth,db } from '../firebase'

function Chat({navigation, route}) {
      const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     setMessages([
//       {
//         _id: 1,
//         text: 'Hello developer',
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: 'React Native',
//           avatar: 'https://placeimg.com/140/140/any',
//         },
//       },
//     ])
//   }, [])

useLayoutEffect(()=>{
     const unsubscribe= db.collection('chats').doc(route.params._id).collection('messages').orderBy('createdAt' , 'desc').
      onSnapshot(snapshot=>setMessages(snapshot.docs.map(
            doc=>({
                  _id:doc.data()._id,
                  createdAt:doc.data().createdAt.toDate(),
                  user:doc.data().user,
                  text:doc.data().text,
                  data:doc.data(),
            })
      )))
      return unsubscribe
}, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const {_id, text, user, createdAt}=messages[0]
    db.collection('chats').doc(route.params._id).collection('messages').add({_id, text,user, createdAt})
  }, [])

  const scrollToBottomComponent=()=>{
        return(
              <FontAwesome name='angle-dubble-down' size={22} color='#333' />
        )
  }

  const renderSend=(props)=>{
        return(
              <Send {...props}>
                  <View>
                        <MaterialCommunityIcons name='send-circle' size={32} style={{marginBottom:5, marginRight: 5}} color='#2e64e5' />
                  </View>
              </Send>
        )
  }

  const renderBubble=(props)=>{
        return(
            <Bubble {...props} 
                  wrapperStyle={{
                        right:{
                              backgroundColor:'#2e64e5'
                        }
                  }}
                  textStyle={{
                        right:{
                         color:'#fff'
                        } 
                  }}
            />
        )      
  }

      return (
              <GiftedChat
                  messages={messages}
                  showAvatarForEveryMessage={true}
                  onSend={messages => onSend(messages)}
                  user={{
                  _id: auth?.currentUser?.email,
                  name: auth?.currentUser?.displayName,
                  avatar: auth?.currentUser?.photoURL
                  }}
                  renderSend={renderSend}
                  renderBubble={renderBubble}
                  alwaysShowSend
                  scrollToBottom
                  scrollToBottomComponent={scrollToBottomComponent}
            />
      )
}

export default Chat


const styles = StyleSheet.create({
      container:{
            flex:1,
            alignItems:'center'
      },
    
})

 {/* <GiftedChat
                  messages={messages}
                  onSend={messages => onSend(messages)}
                  user={{
                  _id: 1,
                  }}
                  renderSend={renderSend}
                  renderBubble={renderBubble}
                  alwaysShowSend
                  scrollToBottom
                  scrollToBottomComponent={scrollToBottomComponent}
            /> */}

// import React, {useState} from 'react'
// import { Text, TouchableOpacity, ImageBackground, View, ScrollView,  image, StyleSheet, TextInput } from 'react-native';
// import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'

// function Chat() {
//       const [input, setInput] = useState('')
//         const [messages, setMessages] = useState([
//               { 
                  
//                     name:'Amaka Ike',
//                     message:'How far, you no come  again'
//               },
//               {
                    
//                     name:'Amaka Ike',
//                     message:'You no try'
//               },
//               {
                    
//                     name:'Amaka Ike',
//                     message:'Today na my birthday and you no show up'
//               },
//               {
                    
//                     lastMessage:'Na my brother oh'
//               },
//         ])

//         sendMessage=()=>{
//               setMessages([...messages, {message: input}]);
//               setInput('')
//         }

//       return (
//             <View style={styles.container}>
//             <ScrollView>
//                   <Text style={styles.text}> YOU ARE CHATTING WITH </Text>
//                   {messages.map((message)=>(
//                         message.name ? (
//                         <View style={styles.sender}>
//                               <Text>{message.name}</Text>
//                               <Text>{message.message}</Text>
//                         </View>) : (
//                               <View style={styles.reciever}>
//                               <Text>{message.message}</Text>
//                         </View>)
//                          ))}
//                          </ScrollView>
//                         <View style={styles.footer}>
//                                     <TextInput placeholder='Your Message' onSubmitEditing={sendMessage} value={input} onChangeText={(text)=>setInput(text)} style={styles.textInput} />
//                                     <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
//                                           <Ionicons name='send' size={24} color='#2B68EB' />
//                                     </TouchableOpacity>
//                   </View>
//             </View>
//       )
// }

// export default Chat


// const styles = StyleSheet.create({
//       container:{
//             flex:1,
//             alignItems:'center'
//       },
//       footer:{
//             flexDirection:'row',
//             alignItems:'center',
//             width:'100%',
//             //marginTop:100
//       },
//       reciever:{
//             padding:10,
//             backgroundColor:'#ECECEC',
//             alignSelf:'flex-end',
//             borderRadius:15,
//             marginBottom:20 ,
//             marginRight:1,
//             maxWidth:'80%',
//             position:'relative'
//       },
//       recieverText:{
//             color:'black',
//             fontWeight:'400',
//             marginLeft:10,
//       },
//       sender:{
//             padding:15,
//             backgroundColor:'pink',
//             alignItems:'flex-start',
//             borderRadius:15,
//             margin:15,
//             maxWidth:'80%',
//             position:'relative'
//       },
//       senderName:{
//             fontSize:10,
//             paddingRight:10,
//             left:10
//       },
//       senderText:{
//             color:'white',
//             fontWeight:'400',
//             marginLeft:10,
//             marginBottom:15
//       },
//       text:{
//             fontSize:18,
//             fontWeight:'bold',
//             justifyContent:'center',
//             color:'pink'
//       },
//       textInput:{
//             bottom:0,
//             height:40,
//             color:'blue',
//             flex:1,
//             borderRadius:30,
//             padding:10,
//             //margiight:15,
//             backgroundColor:'#ECECEC'
//       },
// })

