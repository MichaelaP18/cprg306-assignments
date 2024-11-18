"use client";

import { useState, useEffect } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import Link from "next/link";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');
  const { user } = useUserAuth();

  useEffect(() => {
    loadItems();
  }, [user.uid]);

  const loadItems = async () => {
    try {
      const userId = user.uid;
      const retrieveItems = await getItems(userId);
      setItems(retrieveItems);
    } catch (error) {
      console.error("Error loading items: ", error);
    }
  };

  const handleAddItem = async (newItem) => {
    try {
      const userId = user.uid;
      const itemId = await addItem(userId, newItem);
      newItem.id = itemId;
      setItems(prevItems => [...prevItems, newItem]);
    } catch (error) {
      console.error("Error adding item: ", error);
    }
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
if (!user) {
  return (
    <main>
      <h1>Shopping List</h1>
      <p>You must be logged in to see this page.</p>
    </main>
  );
}

  return (
    <main>
      <ul>
        <li className="p-4 text-left hover:text-blue-600">
          <Link href="http://localhost:3000/week-9">Week 9 Home</Link>
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