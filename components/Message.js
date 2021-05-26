import React from 'react';
import styles from '../assets/styles';

import { Text, View, Image } from 'react-native';

const Message = ({ image, lastMessage, name, match, onPress }) => {
  return (
    <View style={styles.containerMessage} >
      <Image source={image} style={styles.avatar} />
      {/* <Text>{match}</Text> */}
      <View style={styles.content}  >
        <Text>{name}</Text>
        <Text style={styles.message}  onPress={onPress} >{lastMessage}</Text>
      </View>
    </View>
  );
};

export default Message;



// import React, {useEffect, useState} from 'react';
// import styles from '../assets/styles';
// import { Avatar, ListItem } from 'react-native-elements'
// import { auth, db } from '../firebase'
// import { Text, View, Image, TouchableOpacity } from 'react-native';

// const Message = ({ image, enterChat, name, id }) => {
//   const [chatMessages, setChatMessages] = useState([])
  
//   useEffect(() => {
//     const unsubscribe= db
//     .collection('chats')
//     .doc(id)
//     .collection('messages').orderBy('timestamp', 'desc')
//     .onSnapshot((snapshot)=>setChatMessages(
//           snapshot.docs.map((doc)=>doc.data(),
//           )
//     ))
//        return unsubscribe
// }, [])

//   return (
//     <TouchableOpacity style={styles.containerMessage} key={id} onPress={()=>enterChat(id, name)} >
      
//       <Image source={{uri:chatMessages?.[0]?.photoURL || image}} style={styles.avatar} />
//       <View style={styles.content}>
//         <Text>{name}</Text>
//         <Text style={styles.message}> {chatMessages?.[0]?.displayName} :{chatMessages?.[0]?.message} </Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default Message;

