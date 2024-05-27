import React from 'react';
import DataList from './DataList';

function App() {
  return (
    <div> 
        <header>
          <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Данные из PostgreSQL</h1>
        </header>
        <DataList />
    </div>
  );
}

export default App;
