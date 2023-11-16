import React from 'react';
import {Alert, FlatList, Text, View} from 'react-native';

// hooks
import {useListDetail} from './useListDetail';

// component
import {CardRowItem} from '../../components/CardRowItem';
import {Layout} from '../../elements/Layout';
import {Label} from '../../elements/Label';
import {HeaderWrapper} from '../../components/HeaderWrapper';
import {Placeholder} from '../../components/Placeholder';
import {TopBar} from '../../components/TopBar';
import Button from '../../elements/Button';

export const ListDetail = () => {
  const {
    listDetail,
    loading,
    onNavigateToMovieDetail,
    onDeleteList,
    onNavigateToEditList,
  } = useListDetail();
  return (
    <Layout>
      <TopBar
        actionBar={
          <View style={{flexDirection: 'row'}}>
            <Button
              title="Delete"
              loading={loading}
              type="danger"
              onPress={() =>
                Alert.alert(`Delete list ${listDetail?.name}`, '', [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {
                    text: 'Delete',
                    onPress: () => onDeleteList(),
                  },
                ])
              }
            />
            <Button
              title="Edit"
              style={{marginLeft: 4}}
              onPress={onNavigateToEditList}
            />
          </View>
        }
      />

      <FlatList
        ListHeaderComponent={
          <>
            <HeaderWrapper>
              <Label size="header">{listDetail?.name}</Label>
              <Text>{listDetail?.description}</Text>
            </HeaderWrapper>
            <Label size="lg">Movie list</Label>
          </>
        }
        ListEmptyComponent={
          <Placeholder>
            <Label size="md">Data movie list is empty</Label>
          </Placeholder>
        }
        data={listDetail?.results || []}
        renderItem={movie => (
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
        )}
      />
    </Layout>
  );
};
