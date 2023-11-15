import React from 'react';
import {Text, View} from 'react-native';
import {HeaderWrapper} from '../../components/HeaderWrapper';
import {Label} from '../../elements/Label';
import {Layout} from '../../elements/Layout';
import {useListForm} from './useListForm';
import {TopBar} from '../../components/TopBar';
import {Input} from '../../elements/TextInput';
import Button from '../../elements/Button';

export const ListForm = () => {
  const {listId, listDetail, listForm, loading, onSave, onChangeForm} =
    useListForm();

  return (
    <Layout>
      <TopBar />
      <HeaderWrapper>
        <Label size="header">
          {listId ? `Edit list ${listDetail?.name}` : 'Create list'}
        </Label>
        <Text>{listDetail?.description}</Text>
      </HeaderWrapper>

      <View>
        <Label size="md">Name</Label>
        <Input
          onChangeText={val => onChangeForm(val, 'name')}
          value={listForm.name}
        />
      </View>
      <View style={{marginTop: 10}}>
        <Label size="md">Description</Label>
        <Input
          onChangeText={val => onChangeForm(val, 'description')}
          value={listForm.description}
        />
      </View>

      <Button
        style={{marginTop: 30}}
        title="Save"
        onPress={onSave}
        loading={loading}
      />
    </Layout>
  );
};
