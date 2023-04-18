import {View, Text, TouchableOpacity, Image} from 'react-native';
import CustomIcon from './CustomIcon';
import Images from '../Utils/Images';
import Colors from '../Utils/Colors';
import React from 'react';

const Premium = () => (
  <View
    style={{
      flexDirection: 'row',
      backgroundColor: Colors.WHITE,
      // alignItems: 'center',
      paddingVertical: 16,
    }}>
    <Image
      source={Images.PROFILE_PICTURE}
      style={{height: 60, width: 60, borderRadius: 100, marginHorizontal: 16}}
    />
    <View style={{width: 260}}>
      <Text style={{fontSize: 17, fontWeight: 'bold', color: Colors.BLACK}}>
        Try premium to see the jobs where you would be a top participant.
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.DARK_YELLOW,
          borderRadius: 100,
          paddingHorizontal: 16,
          paddingVertical: 5,
          alignSelf: 'flex-start',
          marginVertical: 6,
        }}
        onPress={() => {}}>
        <Text style={{fontSize: 19, fontWeight: 'bold', color: Colors.BLACK}}>
          Try premium for 1 month.
        </Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={() => {}}>
      <CustomIcon name="ellipsis-vertical" size={25} color={Colors.BLACK} />
    </TouchableOpacity>
  </View>
);

export default Premium;
