import React from 'react';
import styles from '../assets/styles';
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  View, image,
  FlatList
} from 'react-native';
import Message from '../components/Message';
import Icon from '../components/Icon';
import Demo from '../assets/data/demo.js';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Messages = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/images/bg.png')} style={styles.bg}>
      <View style={styles.containerMessages}>
          <View style={styles.top}>
            <Text style={styles.title}>Messages</Text>
            <TouchableOpacity>
            </TouchableOpacity>
          </View>

          <FlatList
            data={Demo}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Message
                  image={item.image}
                  name={item.name}
                  lastMessage={item.message}
                  match={item.match}
                  onPress={()=>navigation.navigate('Chat', {name:item.name})} 
                />
              </TouchableOpacity>
            )}
          />
      </View>
    </ImageBackground>
  );
};

export default Messages;
// import React from 'react';
// import styles from '../assets/styles';
// import {
//   Text,
//   TouchableOpacity,
//   ImageBackground,
//   View, image,
//   FlatList
// } from 'react-native';
// import Message from '../components/Message';
// import Icon from '../components/Icon';
// import Demo from '../assets/data/demo.js';
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// const Messages = ({navigation}) => {
//   return (
//     <ImageBackground
//       src={require('../assets/images/bg.png')}
//       style={styles.bg}
//     >
//       <View style={styles.containerMessages}>
//           <View style={styles.top}>
//             <Text style={styles.title}>Messages</Text>
//             <TouchableOpacity>
//               <Text style={styles.icon}>
//               <MaterialCommunityIcons name='dots-vertical' size={25} />
//               </Text>
//             </TouchableOpacity>
//           </View>

//           <FlatList
//             data={Demo}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={({ item }) => (
//               <TouchableOpacity>
//                 <Message
//                   image={item.image}
//                   name={item.name}
//                   lastMessage={item.message}
//                   match={item.match}
//                   onPress={()=>navigation.navigate('Chat')} 
//                 />
//               </TouchableOpacity>
//             )}
//           />
//       </View>
//     </ImageBackground>
//   );
// };

// export default Messages;



// import React, { useState, useEffect} from 'react';
// import styles from '../assets/styles';
// import {
//   Text,
//   TouchableOpacity,
//   ImageBackground,
//   View, image,
//    ScrollView, FlatList,
// } from 'react-native';
// import Message from '../components/Message';
// import Icon from '../components/Icon';
// import demo from '../assets/data/demo.js';
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { auth, db } from '../firebase'

// const Messages = ({navigation}) => {

// //   const [chats, setChats] = useState(demo)

// //   const enterChat=(id,name)=>{
// //     navigation.navigate('Chat',{
// //           id,
// //           name,
// //     })
// // }

// // useEffect(()=>{
// //   const unsubscribe=db.collection('chats').onSnapshot((snapshot)=>
// //   setChats(
// //         snapshot.docs.map((doc)=>({
        
// //               id:doc.id,
// //               data:doc.data(),
// //         }))
// //   ))
// //   return unsubscribe
// // }, [navigation]) 

//   return (
//     <ImageBackground
//       source={require('../assets/images/bg.jpg')}
//       style={styles.bg}
//     >
//       <View style={styles.containerMessages}>
//           <View style={styles.top}>
//             <Text style={styles.title}>Messages</Text>
//             <TouchableOpacity>
//               <Text style={styles.icon}>
//               <MaterialCommunityIcons name='dots-vertical' size={25} />
//               </Text>
//             </TouchableOpacity>
//           </View>
//           {/* <ScrollView >
//                         {chats.map(({id, name})=>(
//                                  <Message key={id} id={id} name={name} enterChat={enterChat} image={image} />
//                         ))}

//                   </ScrollView> */}
//       </View>
//     </ImageBackground>
//   );
// };

// export default Messages;
