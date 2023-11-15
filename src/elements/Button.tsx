import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleSheet,
} from 'react-native';
import {Label} from './Label';

type ButtonComponentProps = PressableProps & {
  title: string;
  loading?: boolean;
  type?: 'danger' | 'secondary';
};

export const Button = ({
  style,
  loading,
  type,
  ...props
}: ButtonComponentProps) => {
  const theme = useTheme();

  const getBackgroundColor = () => {
    if (type === 'danger') {
      return '#FA7070';
    }

    return theme.colors.primary;
  };

  return (
    <Pressable
      {...props}
      disabled={loading}
      style={[
        style,
        styles.baseButton,
        {backgroundColor: getBackgroundColor()},
      ]}>
      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <Label size="md" style={{color: '#fff'}}>
          {props.title}
        </Label>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 4,
  },
});

export default Button;
