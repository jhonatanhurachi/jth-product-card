import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage } from '../../src/components/ProductImage';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('must show component with custom image', () => {
    const wrapper = renderer.create(<ProductImage img={product2.img} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
