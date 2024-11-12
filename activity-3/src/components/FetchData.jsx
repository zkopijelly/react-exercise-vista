import { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();

        setData(jsonData);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="fetch-data-container">
      <h1 className="fetch-data-title">Fetched Data List</h1>
      <ul className="fetch-data-list">
        {data.map((item) => (
          <li key={item.id} className="fetch-data-item">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
