import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useMyListDetail} from './useMyListDetail';
import {Card} from '../../components/Card';

export const MyListDetail = () => {
  const {listDetail, onNavigateToMovieDetail} = useMyListDetail();
  return (
    <View>
      <Text>MY List Detail</Text>
      <FlatList
        data={listDetail?.results || []}
        renderItem={movie => (
          <Card
            imageUri={movie.item.poster_path}
            onPress={() => onNavigateToMovieDetail(movie.item.id)}
          />
        )}
      />
    </View>
  );
};
