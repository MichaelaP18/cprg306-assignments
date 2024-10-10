"use client";

import React, { useState } from 'react';

export default function NewItem() {

const [name, setName] = useState("");
const [quantity, setQuantity] = useState(1);
const [category, setCategory] = useState("Produce");

const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
        name, 
        quantity,
        category,
    };

    console.log(item);

    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);


    setName("");
    setQuantity("");
    setCategory("");
}

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
            <div>
                <label>
                    Name: 
                    <input className="border border-black-800 m-2" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
            </div>
            <div>
                <p className="m-2">Quantity: {quantity}</p> 
                <button type="button" className="bg-green-400 hover:bg-green-600 text-write w-30 rounded p-1 m-2" onClick={Increment}>Increment Quantity</button>

                <button type="button" className="bg-green-400 hover:bg-green-600 text-write w-30 rounded p-1 m-2" onClick={Decrement}>Decrement Quantity</button>
            </div>
            <div>
                <label>
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
            <button className="bg-purple-400 hover:bg-purple-600 text-write w-30 rounded p-1 m-2" type="Submit">Submit</button>
        </form>
    );
}