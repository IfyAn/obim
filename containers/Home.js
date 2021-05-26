import React, { useState, useLayoutEffect } from 'react';
import { View, ImageBackground, TouchableOpacity,Text,  } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { Avatar } from 'react-native-elements'
import Place from '../components/Place';
import CardItem from '../components/CardItem';
import styles from '../assets/styles';
import Demo from '../assets/data/demo.js';
import { auth, db } from '../firebase'
import { Octicons, SimpleLineIcons } from '@expo/vector-icons'

const Home = ({navigation}) => {
  const signOutUser=()=>{
    auth.signOut().then(()=>{
          navigation.replace('Login')
    })
}

  useLayoutEffect(() => {
    navigation.setOptions({
          
          headerTitleStyle:{color: 'black'},
          headerTintColor:'black',
          headerLeft: () =>(
                <View style={{marginLeft:20}}>
                  <TouchableOpacity activeOpacity={0.5}>
                  <Avatar rounded source={{ uri: auth?.currentUser?.photoURL}} />
                  </TouchableOpacity>
                </View>
          ),
          headerRight:()=>(
             <View style={{width:80, marginRight:20,flexDirection:'row', justifyContent:'space-between'}}>
                   <TouchableOpacity activeOpacity={0.5} >
                        <Text>Sign Out</Text>
                   </TouchableOpacity>
                   <TouchableOpacity activeOpacity={0.5}  onPress={signOutUser}>
                        <Octicons name='sign-out' size={24} color='blue' />
                   </TouchableOpacity>
             </View>
          )
    })
}, [navigation])
  return (
    <ImageBackground
      source={require('../assets/images/bg.jpg')}
      style={styles.bg}
    >
      <View style={styles.containerHome}>
        <Place />

        <View style={styles.top}>
            <TouchableOpacity onPress={()=>navigation.navigate('Message')} >
               <Text> Messages</Text> 
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Match')}>
               <Text> Matches</Text> 
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
               <Text> Your Profile</Text> 
            </TouchableOpacity>
        </View>

        <CardStack
          loop={true}
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={swiper => (this.swiper = swiper)}
        >
          {Demo.map((item, index) => (
            <Card key={index}>
              <CardItem
                image={item.image}
                name={item.name}
                description={item.description}
                matches={item.match}
                actions
                onPressLeft={() => this.swiper.swipeLeft()}
                onPressRight={() => this.swiper.swipeRight()}
              />
            </Card>
          ))}
        </CardStack>
      </View>
    </ImageBackground>
  );
};

export default Home;
