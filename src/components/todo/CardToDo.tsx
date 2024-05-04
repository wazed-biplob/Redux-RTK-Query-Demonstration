import { useAppDispatch } from "@/redux/feature/hooks";
import { removeToDo } from "@/redux/feature/todoSlice";
import { Button } from "../ui/button";
import { TData } from "@/App";
import { useUpdateToDosMutation } from "@/redux/api/api";

const CardToDo = ({ item }: { item: TData }) => {
  const dispatch = useAppDispatch();
  const [updateToDo] = useUpdateToDosMutation();
  const toggleState = (_id: string) => {
    // dispatch(toggleComplete(id));
    const updatedData = {
      id: _id,
      data: {
        title: item?.title,
        description: item?.description,
        priority: item?.priority,
        isCompleted: !item?.isCompleted,
      },
    };
    updateToDo(updatedData);
  };

  return (
    <>
      <div className="flex justify-evenly items-center border rounded-md m-2 px-4 py-2 bg-slate-200">
        <input
          className="mx-4"
          onChange={() => toggleState(String(item?._id))}
          type="checkbox"
          id="checkbox"
          name="checkbox"
          checked={item?.isCompleted}
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

        {item?.isCompleted ? (
          <p className="text-green-400 flex-1">Done</p>
        ) : (
          <p className="text-red-500 flex-1">Pending</p>
        )}
        {/* <p className="flex-[2]">{item?.description.substring(0, 30)}</p> */}
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
