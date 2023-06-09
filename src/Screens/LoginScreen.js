import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import LoginForm from '../Forms/LoginForm';
const Linkedin_Logo =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkM43r2rW5-DlJ4fwDFgTQRUmtJguaiWClOw&usqp=CAU';
const LoginScreen = ({navigation}) => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image source={{uri: Linkedin_Logo, height: 100, width: 100}} />
    </View>
    <LoginForm navigation={navigation} />
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingHorizontal: 18,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
});

export default LoginScreen;
