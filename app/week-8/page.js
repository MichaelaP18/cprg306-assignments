"use client";

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items';
import Link from "next/link";
import MealIdeas from "./meal-ideas";

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
    };
  
  const removeEmojis = (string) => {
    return string.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{1FB00}-\u{1FBFF}]/gu,
      ''
    );
  };
  
  const handleItemSelect = (item) => {
    let cleanedName = item.name.split(',')[0].trim();
    cleanedName = removeEmojis(cleanedName);
    setSelectedItemName(cleanedName);
  };

  return (
    <main>
      <ul>
        <li className="p-4 text-left hover:text-blue-600">
          <Link href="http://localhost:3000/">Home</Link>
        </li>
      </ul>
      <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>

      <div className="flex justify-between w-full">
          <div className="flex flex-col items-start p-4">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemsSelect={handleItemSelect}/>
          </div>
      {selectedItemName && (
        <div className="flex flex-col items-start p-4">
          <MealIdeas ingredient={{ name: selectedItemName }} />
        </div> 
      )}
      </div>
      </div>
    </main>
  );
};

export default Page;