/* eslint-disable react/prop-types */

import Button from "./ui/Button";

export default function Counter({ onIncrement, onDecrement }) {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold"> 0 </div>
      <div className="flex space-x-3">
        <Button type="primary" handler={onIncrement}>
          Increment
        </Button>
        <Button type="danger" handler={onDecrement}>
          Decrement
        </Button>
      </div>
    </div>
  );
}
