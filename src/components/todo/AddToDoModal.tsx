import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
import { useAppDispatch } from "@/redux/feature/hooks";
import { addToDo } from "@/redux/feature/todoSlice";

const AddToDoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todoData = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      description: description,
    };

    dispatch(addToDo(todoData));
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-primaryGradient mx-4">Add ToDo</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
            <DialogDescription>Add Your Task Here </DialogDescription>
          </DialogHeader>

          <form onSubmit={onSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Tasks
                </Label>
                <Input
                  id="task"
                  defaultValue="Task Name"
                  className="col-span-3"
                  onBlur={(e) => setTask(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  defaultValue="description..."
                  className="col-span-3"
                  onBlur={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogClose>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddToDoModal;
