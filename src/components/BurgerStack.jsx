const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
      <div>
        <h2>Your Burger Stack</h2>
        <ul>
          {stack.map((ingredient, index) => (
            <li key={index} style={{ backgroundColor: ingredient.color }}>
              {ingredient.name}
              <button onClick={() => removeFromBurger(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BurgerStack;
  