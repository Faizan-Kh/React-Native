// styles.js

import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#3498db',
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  searchContainer: {
    flex: 3,
    marginHorizontal: 10,
  },
  searchInput: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  menuIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
