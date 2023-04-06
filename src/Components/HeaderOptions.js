import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import Styles from '../Utils/Styles';
import CustomIcon from './CustomIcon';
import Colors from '../Utils/Colors';
import Screens from '../Utils/Screens';
import Images from '../Utils/Images';

const HeaderOptions = ({navigation, iconLeft, isPostScreen}) => (
  <View
    style={[
      Styles.flexCenter,
      {
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        elevation: 4,
        paddingVertical: 10,
      },
    ]}>
    <View style={{paddingLeft: 10}}>
      {isPostScreen ? (
        <TouchableOpacity onPress={() => navigation.navigate(Screens.HOME)}>
          <CustomIcon name={iconLeft} size={34} color={Colors.BLACK} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate(Screens.PROFILE)}>
          <Image
            source={Images.PROFILE_PICTURE}
            style={{borderRadius: 50, height: 35, width: 35}}
          />
        </TouchableOpacity>
      )}
    </View>

    {isPostScreen ? (
      <Text
        style={{
          width: 240,
          marginHorizontal: 16,
          fontSize: 19,
          color: Colors.BLACK,
          fontWeight: 'bold',
        }}>
        Share Post
      </Text>
    ) : (
      <TextInput
        placeholder="Search"
        placeholderTextColor={Colors.BLACK}
        style={{
          marginHorizontal: 20,
          width: 240,
          height: 34,
          backgroundColor: Colors.BLUE1,
          borderRadius: 5,
          paddingHorizontal: 10,
          color: Colors.BLACK,
        }}
      />
    )}

    <TouchableOpacity style={{marginRight: 19}}>
      {isPostScreen ? (
        <Text style={{color: Colors.GRAY, fontSize: 16, fontWeight: 'bold'}}>
          Post
        </Text>
      ) : (
        <CustomIcon
          size={28}
          color={Colors.GRAY}
          name="chatbubble-ellipses-outline"
        />
      )}
    </TouchableOpacity>

    <View style={{paddingRight: 10}}>
      {isPostScreen ? null : (
        <TouchableOpacity onPress={() => navigation.navigate(Screens.PROFILE)}>
          <CustomIcon size={28} color={Colors.GRAY} name="settings-outline" />
        </TouchableOpacity>
      )}
    </View>
  </View>
);

export default HeaderOptions;
