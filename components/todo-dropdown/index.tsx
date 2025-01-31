import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Props } from "./types";

const TodoDropdown = (props: Readonly<Props>) => {
  const { onToggleTodo, todos } = props;

  const checkedCount = todos.filter((todo) => todo.checked).length;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex-1 text-xs p-2 flex flex-row justify-between  border-purple-100 bg-purple-100"
        >
          <span>To-Dos</span>
          <span>{`${checkedCount}/${todos.length}`}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 text-xs space-y-2 mr-4  border-purple-100 bg-purple-100">
        {todos.length === 0 ? (
          <div className="flex flex-col text-center">
            <span>You don&apos;t have any todos yet</span>
            <span>Time to relax and enjoy!</span>
          </div>
        ) : (
          todos.map((todo, index) => (
            <div
              key={todo.message}
              className="flex flex-row gap-2 items-center justify-between"
            >
              <label
                key={index}
                htmlFor={String(index)}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {todo.message}
              </label>
              <Checkbox
                key={index}
                id={String(index)}
                checked={todo.checked}
                onCheckedChange={(checked: boolean) =>
                  onToggleTodo(todo.message, checked)
                }
              />
            </div>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoDropdown;
