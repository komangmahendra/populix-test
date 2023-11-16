import React from 'react';
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';

export const Loading = ({...props}: ActivityIndicatorProps) => {
  return <ActivityIndicator {...props} testID="loading" />;
};
