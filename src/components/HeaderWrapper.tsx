import {View, ViewProps} from 'react-native';

export const HeaderWrapper = ({children, ...props}: ViewProps) => {
  return (
    <View {...props} style={[props.style, {marginBottom: 18, padding: 0}]}>
      {children}
    </View>
  );
};
