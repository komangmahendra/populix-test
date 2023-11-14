import React from 'react';
import {FlatList} from 'react-native';

// components
import {Layout} from '../../elements/Layout';
import {Card} from '../../components/Card';

// hooks
import {useHome} from './hooks/useHome';

export const Home = () => {
  const {movieList} = useHome();

  return (
    <Layout>
      <FlatList
        numColumns={2}
        data={movieList}
        renderItem={movie => <Card imageUri={movie.item.poster_path} />}
      />
    </Layout>
  );
};
