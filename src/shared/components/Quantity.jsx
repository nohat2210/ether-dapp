import React, { useState } from 'react';
import { Button } from './common';

function Quantity() {
  const [quantity, setQuantity] = useState(1);

  const handleSubtract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  const handleQuantityChange = e => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <div className="flex">
      <Button
        onClick={handleSubtract}
        icon="minus-icon"
        type="default"
      ></Button>
      <input
        className="w-88px text-center mx-2"
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <Button onClick={handlePlus} icon="plus-icon" type="default"></Button>
    </div>
  );
}

export default Quantity;
