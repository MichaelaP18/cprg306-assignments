"use client";

import React, { useState } from 'react';

export default function NewItem({ onAddItem }) {

const [name, setName] = useState("");
const [quantity, setQuantity] = useState(1);
const [category, setCategory] = useState("Produce");

const generateId = () => {
    return '_' + Math.random().toString(36).substring(2, 9);
};

const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
        id: generateId(),
        name: name, 
        quantity: quantity,
        category: category,
    };

    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
};

    const Increment = () => {
        setQuantity(prevQuantity => {
            if (prevQuantity < 20) {
                return prevQuantity + 1;
            }
            return prevQuantity;
        });
    }

    const Decrement = () => {
        setQuantity(prevQuantity => {
            if (prevQuantity > 1) {
                return prevQuantity - 1;
            }
            return prevQuantity;
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex space-x-2">
                <label className="m-2 my-auto">
                    Name: 
                    <input className="border border-black-800 m-2" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
            </div>
            <div className="flex space-x-2">
                <p className="m-2 my-auto" type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} min="1">Quantity: {quantity}</p> 
                <button type="button" className="px-2 bg-green-400 hover:bg-green-600 text-write w-30 rounded p-1 m-2" onClick={Increment}>Increment Quantity</button>

                <button type="button" className="px-2 bg-green-400 hover:bg-green-600 text-write w-30 rounded p-1 m-2" onClick={Decrement}>Decrement Quantity</button>
            </div>
            <div className="flex space-x-2">
                <label className="m-2 my-auto">
                    Category: 
                </label>
                    <select className="border border-black-800 m-2" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
            </div>
            <div className='flex justify-center'>
            <button className="bg-purple-400 hover:bg-purple-600 text-write w-30 rounded p-2 m-4" type="Submit">Submit</button>
            </div>
        </form>
    );
}