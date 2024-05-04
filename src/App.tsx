import AddToDoModal from "./components/todo/AddToDoModal";
import CardToDo from "./components/todo/CardToDo";
import ContainerToDo from "./components/todo/ContainerToDo";
import FilterToDo from "./components/todo/FilterToDo";
import { useGetToDosQuery } from "./redux/api/api";
import React, { useState } from "react";
// import { useAppSelector } from "./redux/feature/hooks";
export interface TData {
  _id: string;
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  priority: string;
}
export type CountState = string;
export type SetCount = React.Dispatch<React.SetStateAction<CountState>>;

const App: React.FC = () => {
  // const state = useAppSelector((state) => state.todos.todos);

  const [priority, setPriority]: [CountState, SetCount] = useState("");
  const { data, isLoading } = useGetToDosQuery(priority);
  if (isLoading) {
    return (
      <div className="h-[90vh] flex justify-center items-center">
        <p className="text-center mx-auto">Loading...</p>
      </div>
    );
  }
  return (
    <div className=" w-full">
      <p className="mx-auto  text-[36px] text-center my-8 space-y-4">
        My Todos
      </p>
      <div className="flex justify-between items-center">
        <AddToDoModal />
        <FilterToDo priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primaryGradient p-[5px] m-4 rounded-md">
        <div className="p-4 bg-slate-100">
          <ContainerToDo>
            {data?.data?.map((item: TData) => (
              <CardToDo key={item.id} item={item} />
            ))}
          </ContainerToDo>
        </div>
      </div>
    </div>
  );
};

export default App;
