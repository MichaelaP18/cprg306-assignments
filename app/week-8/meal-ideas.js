"use-client"

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const fetchMealIdeas = async (ingredient) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.error('Error fetching meals:', error);
        return [];
    }
};

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
       const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient.name);
        setMeals(mealIdeas || []);
    }; 

    if (ingredient.name) {
        loadMealIdeas();
    }
    }, [ingredient]);

    return (
        <div>
            <h3 className='font-bold text-2xl'>Meal Ideas:</h3>
            <p>Here are some meal ideas based on the ingredient: {ingredient.name}</p>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>
                        <p className='font-bold'>{meal.strMeal}</p>
                        <img src={meal.strMealThumb} alt={meal.strMeal} width="100" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

MealIdeas.propTypes = {
    ingredient: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
};

export default MealIdeas;