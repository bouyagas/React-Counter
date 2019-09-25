import React from 'react';

const Count = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>add</button>
      <button onClick={decrement}>sub</button>
    </div>
  );
};

export default Count;
