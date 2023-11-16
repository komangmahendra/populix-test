import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

// hooks
import {useMovieDetail} from './useMovieDetail';

// constant
import {IMAGE_BASE_URL_W500} from '../../constant/url';

// component
import {Layout} from '../../elements/Layout';
import {HeaderWrapper} from '../../components/HeaderWrapper';
import {Label} from '../../elements/Label';
import {TopBar} from '../../components/TopBar';
import Button from '../../elements/Button';

// utils
import {getDimension} from '../../utils/getDimension';
import {convertTimeToHoursFormat} from '../../utils/convertTimeToHoursFormat';

export const MovieDetail = () => {
  const {movieDetail, onNavigateToList} = useMovieDetail();
  const movieTime = convertTimeToHoursFormat(movieDetail?.runtime || 0);

  return (
    <>
      <View style={styles.headerContainer}>
        <TopBar
          actionBar={<Button title="Add to list" onPress={onNavigateToList} />}
        />
      </View>
      <ScrollView style={styles.container}>
        <Image
          style={styles.imageCover}
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

const styles = StyleSheet.create({
  headerContainer: {
    padding: 8,
    marginTop: 10,
    paddingBottom: -30,
  },
  container: {
    paddingBottom: 100,
  },
  imageCover: {
    resizeMode: 'cover',
    width: getDimension().width,
    height: 300,
  },
});
