'use client';
// import { useRecipeContext } from '@/app/components/recipeContext';
// import Recipe from '@/app/components/recipeContext';
import { useState } from 'react';
// var counter: number = 0;

// interface addRecipeProps {
//   recipeName: string;
// }

interface HealthProps {
    updateValue: number;
    setHealth: Dispatch<any>;
  }

export default function addRecipe({}) {

  // Function to remove a recipe by index
  const onAddRecipe = () => {
    const newRecipe = {
      recipeName: input,
      recipeID: counter,
      steps: {},
    };
    setRecipe((existingRecipes: { [id: number]: Recipe }) => ({
      ...existingRecipes,
      [counter]: newRecipe,
    }));
    console.log(recipes);
    counter = counter + 1;
  };

  return (
    <>
        <button
          className="m-5 inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white hover:opacity-50"
          id="add-btn"
          onClick = {(e) => {
            e.preventDefault();
            onAddRecipe();
            setInput('');
          }}
        >
          Add
        </button>
    </>
  );
}
