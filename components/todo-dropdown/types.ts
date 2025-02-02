interface Todo {
  message: string;
  checked: boolean;
}
export interface Props {
  todos: Todo[];
  onToggleTodo: (message: string, checked: boolean) => void;
}
