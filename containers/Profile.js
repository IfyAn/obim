import React from 'react';
import styles from '../assets/styles';

import {
  ScrollView,
  View,
  Text, Share,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import ProfileItem from '../components/ProfileItem';
import Icon from '../components/Icon';
import Demo from '../assets/data/demo.js';
import { MaterialCommunityIcons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { auth, db } from '../firebase'

const Profile = () => {
  const {
    age,
    image,
    info1,
    info2,
    info3,
    info4,
    location,
    match,
    name
  } = Demo[7];

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'This A Dating app',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
  
    <ImageBackground 
      source={require('../assets/images/bg.jpg')}
      style={styles.bg}
    >
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={{ uri: auth?.currentUser?.photoURL}}style={styles.photo}>
          <View style={styles.top}>
            <TouchableOpacity>
              <Text style={styles.topIconLeft}>
                <MaterialIcons name='keyboard-arrow-left' size={30}  />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.topIconRight}>
                <MaterialCommunityIcons name='dots-vertical' size={25} />
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ProfileItem
          matches={match}
          age={age}
          location={location}
          info1={info1}
          info2={info2}
          info3={info3}
          info4={info4}
        />

        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.circledButton} onPress={onShare}>
            <Text style={styles.iconButton}>
            <MaterialCommunityIcons name='dots-horizontal' size={20}  />
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;
