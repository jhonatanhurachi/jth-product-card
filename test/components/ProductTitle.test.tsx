import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductTitle } from '../../src/components/ProductTitle';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('must show component with custom title', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom Product" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('must show component with product name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
