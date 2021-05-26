import React, { useState } from 'react';
import styles from '../assets/styles';
import { MaterialCommunityIcons, AntDesign,Fontisto, Entypo } from "@expo/vector-icons";
import { Text, View } from 'react-native';
import Icon from './Icon';
import { auth, db } from '../firebase'

const ProfileItem = ({
  age,
  info1,
  info2,
  info3,
  info4,
  location,
  matches,
}) => {

  const [user, setUser] = useState('')
  return (
    <View style={styles.containerProfileItem}>
      <View style={styles.matchesProfileItem}>
        <Text style={styles.matchesTextProfileItem}>
        <MaterialCommunityIcons name='heart' size={15}  /> {matches}% Match!
        </Text>
      </View>
      <Text style={styles.name}>{auth?.currentUser?.displayName}</Text>
      <Text style={styles.descriptionProfileItem}>
        {age} - {location}
      </Text>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
        <Entypo name='user' size={15}  />
        </Text>
        <Text style={styles.infoContent}>{info1}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
        <AntDesign name='meh' size={12}  />
        </Text>
        <Text style={styles.infoContent}>{info2}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
        <Fontisto name='email' size={12}  />
        </Text>
        <Text style={styles.infoContent}>{auth?.currentUser?.email}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
        <Fontisto name='date' size={12}  />
        </Text>
        <Text style={styles.infoContent}>{info4}</Text>
      </View>
    </View>
  );
};

export default ProfileItem;
