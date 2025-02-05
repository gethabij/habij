export default interface Props {
  onSend: (message: string) => void;
  onAddTodo: (message: string) => void;
  onAddHabit: (message: string) => void;
  editingMessage: string | null;
  setEditingMessage: (message: string | null) => void;
  setEditingIndex: (index: number | null) => void;
}
