import * as actions from "../../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";
function Home() {
  const dispatch = useDispatch();
  const Value = useSelector((state) => state.IncDec.num);
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col font-header">
      <div className="pb-5 text-6xl font-medium text-pink-600">
        Welcome to college project
      </div>
      <div className="py-5 text-4xl font-medium">Im From Redux</div>
      <div className="flex  space-x-4 items-center">
        <button
          className="text-white bg-pink-600 py-2 px-4 rounded-lg focus:outline-none focus:ring-4 ring-offset-2 ring-pink-700"
          onClick={() => dispatch(actions.incNumber())}
        >
          INC
        </button>
        <div>{Value}</div>
        <button
          className="text-white bg-pink-600 py-2 px-4 rounded-lg focus:outline-none focus:ring-4 ring-offset-2 ring-pink-700"
          onClick={() => dispatch(actions.decNumber())}
        >
          DEC
        </button>
      </div>
    </div>
  );
}

export default Home;
