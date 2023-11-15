import {ReactNode} from 'react';
import {View} from 'react-native';

export const Layout = ({children}: {children: ReactNode}) => {
  return (
    <View style={{padding: 10, marginTop: 20, backgroundColor: '#fff'}}>
      {children}
    </View>
  );
};
