import React from 'react';
import {FlatList, Text, View} from 'react-native';

// components
import {CardRowItem} from '../../components/CardRowItem';

// hooks
import {useHome} from './useHome';
import {Layout} from '../../elements/Layout';
import {Label} from '../../elements/Label';
import {HeaderWrapper} from '../../components/HeaderWrapper';

export const Home = () => {
  const {movieList, onNavigateToMovieDetail} = useHome();

  return (
    <Layout>
      <FlatList
        data={movieList}
        ListHeaderComponent={
          <HeaderWrapper>
            <Label size="header">Movie list</Label>
          </HeaderWrapper>
        }
        contentContainerStyle={{paddingBottom: 20}}
        renderItem={movie => {
          return (
            <CardRowItem
              imageUri={movie.item.poster_path}
              onPress={() => onNavigateToMovieDetail(movie.item.id)}
              content={
                <>
                  <Label size="md" numberOfLines={1} ellipsizeMode="tail">
                    {movie.item.title}
                  </Label>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{color: '#FF9209'}}>
                    Rating {movie.item.vote_average}
                  </Text>
                </>
              }
            />
          );
        }}
      />
    </Layout>
  );
};
