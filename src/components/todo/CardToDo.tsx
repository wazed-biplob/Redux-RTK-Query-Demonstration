import { useAppDispatch } from "@/redux/feature/hooks";
import { removeToDo, toggleComplete } from "@/redux/feature/todoSlice";
import { useState } from "react";
import { Button } from "../ui/button";
import { TData } from "@/App";

const CardToDo = ({ item }: { item: TData }) => {
  const dispatch = useAppDispatch();
  const [completed, setCompleted] = useState(false);
  const toggleState = (id: string) => {
    dispatch(toggleComplete(id));
    setCompleted(!completed);
  };
  return (
    <>
      <div className="flex justify-evenly items-center border rounded-md m-2 px-4 py-2 bg-slate-200">
        <input
          className="mx-4"
          onChange={() => toggleState(String(item?.id))}
          type="checkbox"
          id="checkbox"
          name="checkbox"
        />

        <p className="flex-1">{item?.title}</p>
        <div className="flex flex-1 gap-x-2 items-center">
          <div
            className={`rounded-full size-3 ${
              item?.priority === "high" ? "bg-red-600" : null
            } ${item?.priority === "medium" ? "bg-yellow-600" : null} ${
              item?.priority === "low" ? "bg-green-600" : null
            }`}
          ></div>
          <p className="flex-1">{item?.priority}</p>
        </div>

        {completed ? (
          <p className="text-green-400 flex-1">Done</p>
        ) : (
          <p className="text-red-500 flex-1">Pending</p>
        )}
        <p className="flex-[2]">{item?.description.substring(0, 10)}</p>
        <div className="flex flex-1 justify-around items-center gap-x-4">
          <Button onClick={() => dispatch(removeToDo(String(item?.id)))}>
            Delete
          </Button>
          <Button>Edit</Button>
        </div>
      </div>
    </>
  );
};

export default CardToDo;
