import {View, Text} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import Icon from 'react-native-vector-icons/Entypo';

const LikeDislike = () => (
  <View
    style={{
      backgroundColor: Colors.WHITE,
      marginVertical: 10,
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    }}>
    <View style={{width: 250}}>
      <Text style={{fontSize: 19, fontWeight: 'bold', color: Colors.BLACK}}>
        Are these jobs right for you?
      </Text>
      <Text style={{fontSize: 17, color: Colors.GRAY}}>
        We will use your feedback to improve the recommendations.
      </Text>
    </View>
    <Icon name="thumbs-up" size={31} color={Colors.BLACK} />
    <Icon name="thumbs-down" size={31} color={Colors.BLACK} />
  </View>
);

export default LikeDislike;
