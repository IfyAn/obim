import React from 'react';
import styles from '../assets/styles';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList
} from 'react-native';
import CardItem from '../components/CardItem';
import Icon from '../components/Icon';
import Demo from '../assets/data/demo.js';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Matches = () => {
  return (
    <ImageBackground
      source={require('../assets/images/bg.jpg')}
      style={styles.bg}
    >
      <View style={styles.containerMatches}>
          <View style={styles.top}>
            <Text style={styles.title}>Matches</Text>
            <TouchableOpacity>
              <Text style={styles.icon}>
              <MaterialCommunityIcons name='dots-vertical' size={25} />
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            numColumns={2}
            data={Demo}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <CardItem
                  image={item.image}
                  name={item.name}
                  status={item.status}
                  variant
                />
              </TouchableOpacity>
            )}
          />
      </View>
    </ImageBackground>
  );
};

export default Matches;
