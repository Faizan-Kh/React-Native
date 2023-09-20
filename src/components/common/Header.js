// Header.js

import React from 'react';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import { headerStyles } from './styles'; // Import the styles

const Header = () => {
  return (
    <View style={headerStyles.header}>
      <View style={headerStyles.logoContainer}>
        {/* Replace 'logo.png' with the path to your logo image */}
        <Image source={require('./assets/logo.png')} style={headerStyles.logo} />
      </View>
      <View style={headerStyles.searchContainer}>
        <TextInput
          style={headerStyles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#777"
        />
      </View>
      <TouchableOpacity style={headerStyles.menuIcon} onPress={() => handleMenuPress()}>
        {/* You can use any icon or three dots image here */}
        <Image source={require('./assets/menu.png')} style={headerStyles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
