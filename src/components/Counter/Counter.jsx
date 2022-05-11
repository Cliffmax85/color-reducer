import { useEffect, useReducer, useState } from 'react';
import styles from './Counter.css';

const colors = {
  yellow: 'rgb(236, 222, 153)',
  green: 'rgb(52, 211, 153)',
  red: 'rgb(239, 68, 68)',
};

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1};
    case 'decrement':
      return { count: state.count - 1};
    case 'reset':
      return initialState;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentColor, setCurrentColor] = useState(colors.yellow);

  useEffect(() => {
    if (state.count === 0) {
      setCurrentColor(colors.yellow);
    }

    if (state.count > 0) {
      setCurrentColor(colors.green);
    }

    if (state.count < 0) {
      setCurrentColor(colors.red);
    }
  }, [state.count]);
  
  const increment = () => {
    dispatch({ type: 'increment' })
  }

  const decrement = () => {
    dispatch({ type: 'decrement' })
  }

  const reset = () => {
    dispatch({ type: 'reset' })
  }

  return (
    <main className={styles.main}>
      <h1 style={{ color: currentColor }}>{state.count}</h1>
      <div>
        <button
          type="button"
          onClick={increment}
          aria-label="increment"
          style={{ backgroundColor: colors.green }}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={decrement}
          aria-label="decrement"
          style={{ backgroundColor: colors.red }}
        >
          Decrement
        </button>
        <button
          type="button"
          aria-label="reset"
          onClick={reset}
          style={{ backgroundColor: colors.yellow }}
        >
          Reset
        </button>
      </div>
    </main>
  );
}
