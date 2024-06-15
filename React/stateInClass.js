//Managing State in Functional Components
//With the introduction of React Hooks in React 16.8, functional components can manage state using the useState hook.

import React, { useState } from 'react';

function Counter() {
  // Declare a state variable named 'count' and a function to update it.
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
