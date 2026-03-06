import { useState } from 'react';
import './App.css';

function App() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsHighlighted(!isHighlighted)}>
        Toggle Highlight
      </button>
      <p className={isHighlighted ? 'highlight' : ''}>
        This is a paragraph that can be highlighted.
      </p>
    </div>
  );
}

export default App;
