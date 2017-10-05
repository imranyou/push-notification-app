import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
      <Text>{props.album.url}</Text>
    </View>
  );

};

export default AlbumDetail;
