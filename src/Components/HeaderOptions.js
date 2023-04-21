import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import Styles from '../Utils/Styles';
import CustomIcon from './CustomIcon';
import Colors from '../Utils/Colors';
import Screens from '../Utils/Screens';
import Images from '../Utils/Images';
import LoginScreen from '../Screens/LoginScreen';
import Posts from '../Data/Posts';
import {MyDrawer} from '../Routes';

const HeaderOptions = ({navigation, iconLeft, isPostScreen}) => {
  // const {searchList, setSearchList} = useState(Posts);
  // const {search, setSearch} = useState(Posts);
  // console.log(Posts);

  // const [restaurantList, setRestaurantList] = useState([Posts]);
  // const [filteredList, setFilteredList] = useState([Posts]);
  // const [search, setSearch] = useState('');

  // const filterFunction = text => {
  //   if (text) {
  //     const newData = Posts.filter(item => {
  //       const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
  //       const textData = text.toUpperCase();
  //       return itemData.indexOf(textData) > -1;
  //     });
  //     setFilteredList(newData);
  //     setSearch(text);
  //   } else {
  //     setFilteredList(restaurantList);
  //     setSearch(text);
  //   }
  // };

  // const searchFilter = data => {
  //   const result = Posts.filter(item => {
  //     return item.name.toLowerCase().includes(data.toLowerCase());
  //   });
  //   setSearch(result);
  // };

  return (
    <View
      style={[
        Styles.flexCenter,
        {
          alignItems: 'center',
          justifyContent: 'space-evenly',
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
          <TouchableOpacity
            onPress={() => navigation.navigate(Screens.PROFILE)}>
            <Image
              source={Images.PROFILE_PICTURE}
              style={{borderRadius: 50, height: 35, width: 35}}
            />
          </TouchableOpacity>
          // <MyDrawer />
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
          // value={restaurantList}
          // onChangeText={loc => filterFunction(loc)}
          // onChangeText={data => searchFilter(data)}
          style={{
            marginHorizontal: 20,
            width: 240,
            height: 40,
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

      <View style={{marginRight: 8}}>
        {isPostScreen ? null : (
          <TouchableOpacity onPress={() => navigation.navigate(LoginScreen)}>
            <CustomIcon size={28} color={Colors.GRAY} name="settings-outline" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default HeaderOptions;
