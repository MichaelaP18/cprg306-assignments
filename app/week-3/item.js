
import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md mb-2">
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{category}</p>
      </div>
      <span className="text-xl font-bold">{quantity}</span>
    </li>
  );
};

export default Item;

