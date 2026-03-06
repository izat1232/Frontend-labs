const items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' }
];

function CombinedComponent() {
  return (
    <>
      <h2>Combined Component</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <p>Total: {items.length} items</p>
    </>
  );
}

export default CombinedComponent;
