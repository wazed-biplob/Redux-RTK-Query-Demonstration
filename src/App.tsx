import AddToDoModal from "./components/todo/AddToDoModal";
import CardToDo from "./components/todo/CardToDo";
import ContainerToDo from "./components/todo/ContainerToDo";
import FilterToDo from "./components/todo/FilterToDo";
import { useGetToDosQuery } from "./redux/api/api";
// import { useAppSelector } from "./redux/feature/hooks";
export interface TData {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  priority: string;
}
const App = () => {
  // const state = useAppSelector((state) => state.todos.todos);
  const { data, isLoading } = useGetToDosQuery(undefined);
  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }
  return (
    <div className=" w-full">
      <p className="mx-auto  text-[36px] text-center my-8 space-y-4">
        My Todos
      </p>
      <div className="flex justify-between items-center">
        <AddToDoModal />
        <FilterToDo />
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
