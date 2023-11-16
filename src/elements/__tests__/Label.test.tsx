import React from 'react';
import rendered from 'react-test-renderer';
import {Label} from '../Label';

describe('Test label', () => {
  test('Should match with snapshot when size is sm', () => {
    const tree = rendered.create(<Label size="sm">Small</Label>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should match with snapshot when size is md', () => {
    const tree = rendered.create(<Label size="md">Medium</Label>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should match with snapshot when size is header', () => {
    const tree = rendered.create(<Label size="header">Header</Label>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should match with snapshot when size is larger', () => {
    const tree = rendered.create(<Label size="lg">Large</Label>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should match with snapshot when size is Xtra large', () => {
    const tree = rendered.create(<Label size="xl">Xtra large</Label>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
