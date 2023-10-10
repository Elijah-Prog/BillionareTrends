import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid';
import { Bars3BottomRightIcon } from 'react-native-heroicons/solid';
import Logo from '../../resources/images/original.png';


const Header = ({ navigation }) => {
  return (
    <View style={styles.Header} className="flex-row px-2 py-3 justify-between items-center shadow-lg ">
      <Image
        source={require("../../resources/images/billionare.png")}
        style={styles.ImageStyle}
      />
      <View style={styles.diff} className="flex-row space-x-4 bg-redprimary">
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <MagnifyingGlassIcon color="#fff" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Bars3BottomRightIcon color="#fff" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {

    paddingTop: 50
  },
  diff: {
    padding: 6,
    borderRadius: 200
  },
  ImageStyle: {

    flex: 1,
    width: 40,
    height: 50,
    resizeMode: 'contain',
    marginRight: 60,
    marginBottom: 10
  }
});