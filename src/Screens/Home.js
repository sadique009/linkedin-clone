import {View, FlatList} from 'react-native';
import React from 'react';
import Posts from '../Data/Posts';
import ShowPosts from '../Components/ShowPosts';
import HeaderOptions from '../Components/HeaderOptions';

export default function Home() {
  return (
    <View>
      {/* <HeaderOptions /> */}
      <FlatList
        data={Posts}
        showsVerticalScrollIndicator={true}
        renderItem={({item}) => <ShowPosts item={item} />}
      />
    </View>
  );
}
