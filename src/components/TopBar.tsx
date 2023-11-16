import React from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';
import {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity, View, ViewProps} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

type TopBarProps = ViewProps & {
  actionBar?: ReactNode;
  showBackButton?: boolean;
};

export const TopBar = ({showBackButton, actionBar, ...props}: TopBarProps) => {
  const theme = useTheme();
  const {goBack} = useNavigation();

  return (
    <View style={[props, styles.container]}>
      {showBackButton || showBackButton === undefined ? (
        <TouchableOpacity
          testID="topbar-back-button"
          onPress={() => goBack()}
          style={[{backgroundColor: theme.colors.border}, styles.button]}>
          <Icon name="arrowleft" size={18} />
        </TouchableOpacity>
      ) : null}
      {actionBar}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 50,
    padding: 14,
    alignSelf: 'flex-start',
  },
});
