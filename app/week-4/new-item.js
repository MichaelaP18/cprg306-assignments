"use client";

import React, { useState } from 'react';

export default function NewItem() {
const [quantity, setQuantity] = useState(1);

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
        <div>
           
            <p>Quantity: {quantity}</p> 
            <button className="bg-green-400 hover:bg-green-600 text-write w-30 rounded p-1 m-2" onClick={Increment}>Increment Quantity</button>

            <button className="bg-green-400 hover:bg-green-600 text-write w-30 rounded p-1 m-2" onClick={Decrement}>Decrement Quantity</button>
        </div>
        );
}