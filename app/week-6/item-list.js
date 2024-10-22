import { useState, useEffect } from 'react';
import Item from './item';
import items from './items';



export default function ItemList() {
    const [sortByName, setSortByName] = useState(true);
    const [sortByCategory, setSortByCategory] = useState(false);
    const [sortedItems, setSortedItems] = useState([...items]);
    

    
    const handleClick = (sortOption) => {
        let sortedItems = [...items];
        if (sortOption === 'name') {
          setSortByName(true);
          setSortByCategory(false);
          sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOption === 'category') {
          setSortByName(false);
          setSortByCategory(true);
          sortedItems.sort((a, b) => a.category.localeCompare(b.category));
        }
        setSortedItems(sortedItems);
      };


   

  return (
    <div>
        <label>Sort By: </label>
        <button onClick={() => handleClick('name')}  className="bg-green-400 hover:bg-green-600 rounded w-30 p-2 m-2">Name</button>
        <button onClick={() => handleClick('category')} className="bg-purple-400 hover:bg-purple-600 rounded w-30 p-2 m-2">Category</button>
        <ul>
        {sortedItems.map((item) => (
            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
        </ul>
        
    </div>
  );

};


