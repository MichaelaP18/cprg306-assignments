"use client";

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items';
import Link from "next/link";

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
    };

  return (
    <main>
      <ul><li className="p-4 text-left hover:text-blue-600"><Link href="http://localhost:3000/">Home</Link></li></ul>
      <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items}/>
      
      </div>
    </main>
  );
};

export default Page;