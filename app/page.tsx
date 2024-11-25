'use client';
import Image from 'next/image';
import RecipeStep from './RecipeStep';
import Layout from './Layout';
import Card from './Card';
import { useEffect, useState } from 'react';
import './style.css';

export default function Home() {
  // Add states for tracking input and recipe steps
  const [input, setInput] = useState('');
  const [recipeSteps, setRecipeSteps] = useState({});

  // Add states for tracking recipeName input and recipes
  const [recipe, setRecipe] = useState({});
  const [recipeName, setRecipeName] = useState('');

  // This reactive effect runs every time the App component is rendered! if you only want it to run once (on the first mounting of the component) despite state changes, add the empty dependency array [] as the 2nd argument of useEffect. If I wanted it to be dependent on recipeSteps state, add [recipeSteps] as 2nd arg.
  // useEffect(() => {
  //   // fetch data
  //   console.log('hello');
  // });

  return (
    <Layout>
      {/* Cards */}
      <form
        onSubmit={(e) => {
          // TODO #1: Prevent default behavior
          e.preventDefault();

          const id = `step-${Math.floor(Math.random() * Date.now())}`;

          // TODO #3: Add new recipe step to state
          setRecipe({
            ...recipe,
            [id]: recipeName,
          });

          // TODO #4: Clear input text
          setRecipeName('');
        }}
      >
        <label htmlFor="recipe">Add recipe (title): </label>
        <textarea
          id="recipe"
          name="recipe-name"
          rows={3}
          // TODO #2: Set value to input & add input handler
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        ></textarea>
        <button id="add-btn" type="submit">
          Add
        </button>
      </form>

      {/* The RECIPE CARDS !!! */}
      <div className="cards">
        {Object.entries(recipe).map(([k, v]) => (
          <Card ID={k} title={v} />
        ))}
      </div>

      {/* The RECIPE TASKS !!! */}
      <form
        onSubmit={(e) => {
          // TODO #1: Prevent default behavior
          e.preventDefault();

          const id = `step-${Math.floor(Math.random() * Date.now())}`;

          // TODO #3: Add new recipe step to state
          setRecipeSteps({
            ...recipeSteps,
            [id]: input,
          });

          // TODO #4: Clear input text
          setInput('');
        }}
      >
        <label htmlFor="recipe-step">Add task:</label>
        <textarea
          id="recipe-step"
          name="step"
          rows={3}
          // TODO #2: Set value to input & add input handler
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <button id="add-btn" type="submit">
          Add
        </button>
      </form>

      <ol>
        {Object.entries(recipeSteps).map(([k, v]) => (
          <RecipeStep key={k} stepText={v} />
        ))}
      </ol>
    </Layout>
  );
}
