"use client";

import { useState } from "react";

import dogsJson from "./dogs.json";

export default function Pages() {
    const [selectedDogId, setSelectedDogId] = useState(-1);
    let dogs = [...dogs];

    dogs.sort((a,b) => a.name.localeCompare(b.name));

    //Removes dog with id 2.
    dogs = dogs.filter((dog) => dog.id !== 2);

    const handleClick = (id) => {
        if (selectedDogId === id) {
            setSelectedDogId(-1);
            return;
        }
        setSelectedDogId(id);

    }

    return (
        <div>
            <h1>Week 6</h1>
            <p>Page</p>
            <p>Currently selected id: {selectedDogId}</p>
            <ul>
                {dogs.map((dog) => (
                    <li key={dog.id} className={`flex ${dog.id === selectedDogId ? "bg-slate-500" : ""}`} onClick={() => handleClick(dog.id)}>
                        <h2>{dog.name}</h2>
                        <p>{dog.description}</p>
                        <Image src={imageURL} alt={dog.name} width={300} height={200} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
