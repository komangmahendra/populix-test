import React from 'react';
import {ActivityIndicator, Image, ScrollView, Text, View} from 'react-native';
import {useMovieDetail} from './useMovieDetail';
import {IMAGE_BASE_URL_W500} from '../../constant/url';
import {useDimension} from '../../utils/useDimension';
import {Layout} from '../../elements/Layout';
import {HeaderWrapper} from '../../components/HeaderWrapper';
import {Label} from '../../elements/Label';
import {convertTimeToHoursFormat} from '../../utils/convertTimeToHoursFormat';
import {TopBar} from '../../components/TopBar';
import Button from '../../elements/Button';

export const MovieDetail = () => {
  const {width} = useDimension();
  const {movieDetail, onNavigateToList} = useMovieDetail();
  const movieTime = convertTimeToHoursFormat(movieDetail?.runtime || 0);

  return (
    <>
      <View style={{padding: 8, marginTop: 10, paddingBottom: -30}}>
        <TopBar
          actionBar={<Button title="Add to list" onPress={onNavigateToList} />}
        />
      </View>
      <ScrollView style={{paddingBottom: 100}}>
        <Image
          style={{resizeMode: 'cover', width: width, height: 300}}
          source={{uri: `${IMAGE_BASE_URL_W500}/${movieDetail?.backdrop_path}`}}
        />

        <Layout>
          <HeaderWrapper>
            <Label size="xl">{movieDetail?.title}</Label>
            <Label size="md">
              {movieTime.h}.{movieTime.m} hours
            </Label>
          </HeaderWrapper>
          <Text>{movieDetail?.overview}</Text>
        </Layout>
      </ScrollView>
    </>
  );
};
