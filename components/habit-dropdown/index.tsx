"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

import { Props } from "./types";

const HabitDropdown = (props: Readonly<Props>) => {
  const { onToggleHabit, habits } = props;

  const checkedCount = habits.filter((habit) => habit.checked).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex-1 text-xs p-2 flex flex-row justify-between border-orange-100 bg-orange-100"
        >
          <span>Habits</span>
          <span>{`${checkedCount}/${habits.length}`}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 text-xs space-y-2 ml-4  border-orange-100 bg-orange-100">
        {habits.length === 0 ? (
          <div className="flex flex-col">
            <span>Find one thing you enjoy and make it a habit.</span>
            <span>Every little step counts!</span>
          </div>
        ) : (
          habits?.map((habit, index) => (
            <div
              key={index}
              className="flex flex-row gap-2 items-center justify-between"
            >
              <label
                key={index}
                htmlFor={String(index)}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {habit.message}
              </label>
              <Checkbox
                className=" bg-transparent border-3  checked:border-transparent "
                key={index}
                id={String(index)}
                checked={habit.checked}
                onCheckedChange={(checked: boolean) =>
                  onToggleHabit(habit.message, checked)
                }
              />
            </div>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HabitDropdown;
