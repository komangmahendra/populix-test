import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {CardRowItem} from '../CardRowItem';
import {Text} from 'react-native';

const mockOnPress = jest.fn();
describe('Card Row Item test', () => {
  test('Should render properly', () => {
    const {getByText, getByTestId} = render(
      <CardRowItem
        onPress={mockOnPress}
        imageUri="/test.jpg"
        testID="card-row-item"
        content={<Text>Test content</Text>}
      />,
    );

    expect(getByText('Test content')).toBeTruthy();

    const cardComponent = getByTestId('card-row-item');
    expect(cardComponent).toBeTruthy();
    fireEvent.press(cardComponent);
    expect(mockOnPress).toHaveBeenCalled();
  });
});
