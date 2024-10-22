import { useState, useEffect } from 'react';
import Item from './item';
import Items from './items';



const ItemList = () => {
    const [sortBy, setSortBy] = useState('name');
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch('./items.json')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error("Error fetching data: ", error));
    }, []);
    
    const handleClick = (sortOption) => {
            setSortBy(sortOption);

    }

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
          return a.category.localeCompare(b.category);
        }
        return 0;
      });

  return (
    <div>
        <label>Sort By: </label>
        <button onClick={() => handleClick('name')} style={buttonStyles(sortBy ===  'name' )} className="bg-green-400 hover:bg-green-600 rounded w-30 p-2 m-2">Name</button>
        <button className="bg-green-400 hover:bg-green-600 rounded w-30 p-2 m-2" style={buttonStyles(sortBy === 'category')} onClick={() => handleClick('category')}>Category</button>
        <ul>
        {sortedItems.map((item, index) => (
            <li key={index}>{item.name} - {items.category}</li>
        ))}
        </ul>
        <p>Current sorting preference: {sortBy}</p>
    </div>
  );
};

const buttonStyles = (isActive) => ({
    margin: '0 5px',
    padding: '10px 20px',
    backgroundColor: isActive ? 'purple' : 'grey',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
});  

export default ItemList;