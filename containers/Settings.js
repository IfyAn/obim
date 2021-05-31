import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import SettingsComponent from '../components/SettingsComponent';
import { ImageBackground } from 'react-native';
import styles from '../assets/styles';
import { auth, db } from '../firebase'
import { MaterialCommunityIcons, MaterialIcons, AntDesign } from "@expo/vector-icons";

const Settings = () => {
  const [currentUser]= React.useState('')
  const [email, setEmail] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [sortBy, setSortBy] = React.useState(null);

  const saveSetting = (key, value) => {
    AsyncStorage.setItem(key, value);
  };

  const settingsOptions = [
    {id:1,title: 'Name', subTitle: auth?.currentUser?.displayName, onPress: () => {}},
    {title: 'Accounts', subTitle: null, onPress: () => {}},
    {
      id:2,
      title: 'Your Email',
      subTitle: email,
      onPress: () => {},
    },
    {
      id:3,title: 'Contacts to display', subTitle: 'All contacts', onPress: () => {}},
    {
      id:4,
      title: 'Sort by',
      subTitle: sortBy,
      onPress: () => {
        setModalVisible(true);
      },
     },
     {id:5,title:<MaterialCommunityIcons name='heart' size={30} color='red' /> , subTitle:'Match  85%' , onPress: () => {}},
     //{id:6,title: <MaterialIcons name='help' size={30} color='pink' />, subTitle: 'Assistant', onPress: () => {}},
    // {title: 'Export', subTitle: null, onPress: () => {}},
     {id:8,title:'Assistant', subTitle: <MaterialIcons name='help' size={30} color='pink' />, onPress: () => {}},
    // {title: 'About RNContacts', subTitle: null, onPress: () => {}},
  ];

  const prefArr = [
    {
      name: 'First Name',
      selected: sortBy === 'First Name',

      onPress: () => {
        saveSetting('sortBy', 'First Name');
        setSortBy('First Name');
        setModalVisible(false);
      },
    },
    {
      name: 'Last Name',
      selected: sortBy === 'Last Name',
      onPress: () => {
        saveSetting('sortBy', 'Last Name');
        setSortBy('Last Name');
        setModalVisible(false);
      },
    },
  ];

  const getSettings = async () => {
    const user = await AsyncStorage.getItem('currentUser');
    setEmail(auth?.currentUser?.email);

    const sortPref = await AsyncStorage.getItem('sortBy');
    if (sortPref) {
      setSortBy(sortPref);
    }
  };
  useEffect(() => {
    getSettings();
  }, []);

  return (
     <ImageBackground
      source={require('../assets/images/bg.jpg')}
      style={styles.bg}
    >
    <SettingsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      settingsOptions={settingsOptions}
      prefArr={prefArr}
    />
    </ImageBackground>
  );
};

export default Settings;
