# JTH-Product-Card

Package for npm deploying testing

### Jhonatan Tupayachi Hurtado

## Example

```
import { ProductCard } from "jth-product-card";

const product = {
  id: '1',
  title: 'Coffee Mug',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({reset}) => (
          <>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </>
        )}
      </ProductCard>
    </div>
  );
};

```