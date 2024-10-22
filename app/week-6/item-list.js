import { useState, useEffect } from 'react';
import Item from './item';
import items from './items';



export default function ItemList() {
    const [sortByName, setSortByName] = useState(true);
    const [item, setItems] = useState([...items]);
    const [sortByCategory, setSortByCategory] = useState(false);

    
    const handleClick = (sortOption) => {
            setSortBy(sortOption);

    }


    const sortedItemsName = [...item].sort((a, b) => {
        if (!sortByName) {
            setSortByName(true);
            setSortByCategory(false);
            const sortedItems = [...item].sort((a, b) => {
                a.name.localeCompare(b.name);
            }
        }
        setItems(sortedItems);
      });

  return (
    <div>
        <label>Sort By: </label>
        <button onClick={() => handleClick('name')} style={buttonStyles(sortBy ===  'name' )} className="bg-green-400 hover:bg-green-600 rounded w-30 p-2 m-2">Name</button>
        <button style={buttonStyles(sortBy === 'category')} onClick={() => handleClick('category')}>Category</button>
        <ul>
        {items.map((items, index) => (
            <li key={index}>{items.name}</li>
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
