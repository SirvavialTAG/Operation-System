import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/goods')
      .then(response => {
        console.log(response.data); // Добавьте это для проверки данных
        setGoods(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the goods data!", error);
      });
  }, []);

  return (
    <div>
      <h1>Goods Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Category Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {goods.map(good => (
            <tr key={good.product_id}>
              <td>{good.product_id}</td>
              <td>{good.product_name}</td>
              <td>{good.category_name}</td>
              <td>{good.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;