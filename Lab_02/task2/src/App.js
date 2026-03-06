import Card from './Card';
import ProductList from './ProductList';
import Section from './Section';

function App() {
  return (
    <div className="App">
      <h1>Lab 2.2</h1>
      
      <Card title="Card 1">
        <p>This is the first card content.</p>
      </Card>
      
      <Card title="Card 2" className="special">
        <p>This is the second card content.</p>
      </Card>
      
      <Section title="Products">
        <ProductList />
      </Section>
    </div>
  );
}

export default App;
