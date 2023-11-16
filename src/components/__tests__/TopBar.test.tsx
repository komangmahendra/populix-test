import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';
import {TopBar} from '../TopBar';
import Button from '../../elements/Button';

jest.mock('react-native-vector-icons/AntDesign', () => 'Back icon');
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: jest.fn(),
  }),
  useTheme: () => ({colors: {border: '#fff'}}),
}));

const mockButton = jest.fn();
describe('Test Top bar', () => {
  test('Component should render properly', () => {
    const {getByText, getByTestId} = render(
      <TopBar
        actionBar={<Button title="Test button" onPress={mockButton} />}
      />,
    );

    const button = getByText('Test button');
    expect(button).toBeTruthy();

    fireEvent.press(button);
    expect(mockButton).toHaveBeenCalled();

    const backButton = getByTestId('topbar-back-button');
    expect(backButton).toBeTruthy();
  });

  test('Back button should not show when props showBackButton false', () => {
    const {queryByTestId} = render(
      <TopBar
        showBackButton={false}
        actionBar={<Button title="Test button" onPress={mockButton} />}
      />,
    );

    const backButton = queryByTestId('topbar-back-button')?.findAll;
    expect(backButton?.length).toEqual(undefined);
  });
});
