import React from 'react';
import styles from '../assets/styles';
import { MaterialCommunityIcons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { Text, TouchableOpacity } from 'react-native';
import Icon from './Icon';

const City = () => {
  return (
    <TouchableOpacity style={styles.city}>
      <Text style={styles.cityText}>
      <MaterialCommunityIcons name='map-marker' size={12} />New York
      </Text>
    </TouchableOpacity>
  );
};

export default City;
