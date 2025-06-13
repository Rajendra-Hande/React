
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // initial count is 0

  const handleClick = () => {
    setCount(count + 1); // updates the state
  };

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Counter

