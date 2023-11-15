import React from 'react';
import {FlatList, View} from 'react-native';

// components
import {Card} from '../../components/Card';

// hooks
import {useHome} from './useHome';

export const Home = () => {
  const {movieList, onNavigateToMovieDetail} = useHome();

  return (
    <View>
      <FlatList
        numColumns={2}
        data={movieList}
        contentContainerStyle={{paddingBottom: 20}}
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
