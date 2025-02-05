export default interface Props {
  messages: string[];
  onAddHabit: (message: string) => void;
  setEditingMessage: (message: string | null) => void;
  setEditingIndex: (index: number | null) => void;
}
