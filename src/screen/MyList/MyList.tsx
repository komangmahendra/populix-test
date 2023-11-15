import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useMyList} from './useMyList';

export const MyList = () => {
  const {collectionList, onNavigateListItemDetail} = useMyList();

  return (
    <View>
      <FlatList
        data={collectionList}
        renderItem={item => (
          <Text onPress={() => onNavigateListItemDetail(item.item.id)}>
            {item.item.name} HEHE
          </Text>
        )}
      />
    </View>
  );
};
