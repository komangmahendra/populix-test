import React from 'react';
import {render} from '@testing-library/react-native';
import {Placeholder} from '../Placeholder';
import {Label} from '../../elements/Label';
import {Text} from 'react-native';

describe('Test header wrapper', () => {
  test('Component should render properly', () => {
    const {getByText} = render(
      <Placeholder>
        <Label size="md">Test placeholder</Label>
        <Text>subtitle</Text>
      </Placeholder>,
    );

    expect(getByText('Test placeholder')).toBeTruthy();
    expect(getByText('subtitle')).toBeTruthy();
  });
});
