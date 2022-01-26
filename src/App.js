import React from 'react';
import CategoryDropdown from './components/Dropdown';

function App() {
  const options = [
    {
      value: 'test',
      text: 'test'
    }
  ];


  return (
    <div className="App">
      <CategoryDropdown options={options} />
    </div>
  );
}

export default App;
