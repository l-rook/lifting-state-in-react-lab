import { useState } from 'react';
import './App.css';
import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';

// Available ingredients for the burger
export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  // Initialize stack state
  const [stack, setStack] = useState([]);

  // Function to add ingredients to the burger stack
  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient]);
  };

  // Function to remove ingredients from the burger stack
  const removeFromBurger = (ingredientIndex) => {
    const newStack = stack.filter((_, index) => index !== ingredientIndex);
    setStack(newStack);
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section style={{ display: 'flex', justifyContent: 'space-around' }}>
        {/* Passing available ingredients and functions as props */}
        <IngredientList ingredients={availableIngredients} addToBurger={addToBurger} />
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
      </section>
    </main>
  );
};

export default App;