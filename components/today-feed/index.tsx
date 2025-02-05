"use client";
import { useState } from "react";

import JournalInput from "../journal-input";
import JournalLogs from "../journal-logs";
import DateBlocks from "../date-blocks";
import TodoDropdown from "../todo-dropdown";
import HabitDropdown from "../habit-dropdown";

const TodayFeed = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [todos, setTodos] = useState<{ message: string; checked: boolean }[]>(
    [],
  );

  const [habits, setHabits] = useState<{ message: string; checked: boolean }[]>(
    [],
  );

  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [editingMessage, setEditingMessage] = useState<string | null>(null);

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;
    if (editingIndex !== null) {
      // If editing, update the message instead of adding a new one
      setMessages((prev) =>
        prev.map((msg, index) => (index === editingIndex ? message : msg)),
      );
      setEditingIndex(null); // Reset edit mode
    } else {
      setMessages((prev) => [message, ...prev]);
    }
  };

  const handleAddToTodo = (message: string) => {
    if (todos.find((todo) => todo.message === message)) return; // Prevent duplicates
    setTodos((prev) => [...prev, { message, checked: false }]);
  };

  const handleAddToHabit = (message: string) => {
    if (habits.find((habit) => habit.message === message)) return; // Prevent duplicates
    setHabits((prev) => [...prev, { message, checked: false }]);
  };

  const handleToggleTodo = (message: string, checked: boolean) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.message === message ? { ...todo, checked } : todo,
      ),
    );
  };

  const handleToggleHabit = (message: string, checked: boolean) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.message === message ? { ...habit, checked } : habit,
      ),
    );
  };

  return (
    <div className="flex flex-col items-center p-4 h-full gap-1 ">
      <div className="bg-gray-100  top-0  absolute h-20 -z-1 w-full "></div>
      <DateBlocks />
      <div className="flex flex-row gap-1 w-full z-10">
        <HabitDropdown habits={habits} onToggleHabit={handleToggleHabit} />
        <TodoDropdown todos={todos} onToggleTodo={handleToggleTodo} />
      </div>
      <div className="w-full h-full flex-1 overflow-y-auto">
        <JournalLogs
          messages={messages}
          onAddHabit={handleAddToHabit}
          setEditingIndex={setEditingIndex}
          setEditingMessage={setEditingMessage}
        />
      </div>
      <div className="w-full  pb-2 ">
        <JournalInput
          onSend={handleSendMessage}
          onAddTodo={handleAddToTodo}
          onAddHabit={handleAddToHabit}
          setEditingIndex={setEditingIndex}
          editingMessage={editingMessage}
          setEditingMessage={setEditingMessage}
        />
      </div>
    </div>
  );
};

export default TodayFeed;
