import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/goods')
      .then(response => {
        console.log(response.data); 
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
          {goods.map(goods => (
            <tr key={goods.product_id}>
              <td>{goods.product_id}</td>
              <td>{goods.product_name}</td>
              <td>{goods.category_name}</td>
              <td>{goods.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;