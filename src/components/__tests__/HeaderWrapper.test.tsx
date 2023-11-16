import React from 'react';
import {render} from '@testing-library/react-native';
import {HeaderWrapper} from '../HeaderWrapper';
import {Label} from '../../elements/Label';

describe('Test header wrapper', () => {
  test('Component should render properly', () => {
    const {getByText} = render(
      <HeaderWrapper>
        <Label size="header">Test header</Label>
      </HeaderWrapper>,
    );

    expect(getByText('Test header')).toBeTruthy();
  });
});
