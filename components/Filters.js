import React from 'react';
import styles from '../assets/styles';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from 'react-native';
import Icon from './Icon';

const Filters = () => {
  return (
    <TouchableOpacity style={styles.filters}>
      <Text style={styles.filtersText}>
      <MaterialCommunityIcons name='filter' size={10} /> Filters
      </Text>
    </TouchableOpacity>
  );
};

export default Filters;
