import { useState } from 'react';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const incr = () => {
    if (count < stock) setCount(count + 1);
  };

  const decr = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-3 items-center">
        <button onClick={decr} className="flex justify-center items-center w-6 h-5 bg-gray-300 rounded">-</button>
        <span>{count}</span>
        <button onClick={incr} className="flex justify-center items-center w-6 h-5 bg-gray-300 rounded">+</button>
      </div>
      <button onClick={() => onAdd(count)} className="mt-2 bg-blue-500 text-white px-2 py-2 rounded">
        Añadir al carrito
      </button>
    </div>
  );
};

export default ItemCount;
