interface Habit {
  message: string;
  checked: boolean;
}
export interface Props {
  habits: Habit[];
  onToggleHabit: (message: string, checked: boolean) => void;
}
