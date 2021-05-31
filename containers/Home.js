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
             <View style={{width:80, marginRight:20,flexDirection:'row', justifyContent:'space-evenly'}}>
                   <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Settings')}>
                        <Text style={{fontSize:16, fontWeight:'800', right:5}}>Settings</Text>
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
        <View style={styles.filtersText} >
             <Place />
        </View>

        <View style={styles.top}>
            <TouchableOpacity onPress={()=>navigation.navigate('Message')} style={styles.filters} >
               <Text> Messages</Text> 
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Match')} style={styles.filters}>
               <Text> Matches</Text> 
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Profile')} style={styles.filters}>
               <Text> Your Profile</Text> 
            </TouchableOpacity>
        </View>

        <CardStack
          loop={true}
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={swiper => (swiper=swiper)}
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
