const products = [
  { id: 1, name: 'Widget', price: 9.99 },
  { id: 2, name: 'Gadget', price: 19.99 },
  { id: 3, name: 'Thingama', price: 29.99 }
];

function ProductList() {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <span>{product.name}</span> - <span>${product.price}</span>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
