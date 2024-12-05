import { useDispatch, useSelector } from "react-redux";
import Button from "./components/ui/Button";
import { decrement, increment } from "./redux/features/counterSlice";

export default function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold"> {count} </div>
        <div className="flex space-x-3">
          <Button type="primary" handler={handleIncrement}>
            Increment
          </Button>
          <Button type="danger" handler={handleDecrement}>
            Decrement
          </Button>
        </div>
      </div>
    </div>
  );
}
