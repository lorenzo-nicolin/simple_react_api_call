import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Apicall = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/independent?status=true')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
      <div>
      {/* Display the fetched data */}
      {data.map(item => (
        <div key={item.id}>{item.borders}</div>
      ))}
    </div>
  );
};

export default Apicall;