import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useList} from './useList';
import {Label} from '../../elements/Label';
import Icon from 'react-native-vector-icons/AntDesign';
import {Layout} from '../../elements/Layout';
import {HeaderWrapper} from '../../components/HeaderWrapper';
import Button from '../../elements/Button';
import {TopBar} from '../../components/TopBar';

export const List = () => {
  const {
    collectionList,
    loading,
    movieId,
    onNavigateToHome,
    onPickListItem,
    onNavigateToListForm,
    onNavigateListItemDetail,
  } = useList();

  return (
    <Layout>
      <TopBar
        actionBar={
          movieId ? (
            <Button title="Done" onPress={() => onNavigateToHome()} />
          ) : (
            <Button title="Create list" onPress={onNavigateToListForm} />
          )
        }
      />
      <FlatList
        ListHeaderComponent={
          <HeaderWrapper>
            <Label size="header">List</Label>
          </HeaderWrapper>
        }
        data={collectionList}
        renderItem={item => (
          <TouchableOpacity
            onPress={() => onNavigateListItemDetail(item.item.id)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 4,
              paddingVertical: 10,
              borderBottomColor: '#dbdbdb',
              borderBottomWidth: 1,
            }}>
            <View>
              <Label size="md">{item.item.name}</Label>
              <Text style={{fontSize: 12, color: '#696868'}}>
                {item.item.number_of_items} movies
              </Text>
            </View>

            {movieId ? (
              <Button
                loading={loading}
                title="Select"
                onPress={() => onPickListItem(item.item.id)}
              />
            ) : (
              <Icon name="right" size={16} />
            )}
          </TouchableOpacity>
        )}
      />
    </Layout>
  );
};
