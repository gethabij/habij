"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Props from "./types";
import { Check, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import useLongPress from "@/lib/hooks/use-long-press";

import { Popover, PopoverContent, PopoverAnchor } from "../ui/popover";
import { Separator } from "../ui/separator";

function JournalInput(props: Readonly<Props>) {
  const {
    onSend,
    onAddTodo,
    onAddHabit,
    editingMessage,
    setEditingMessage,
    setEditingIndex,
  } = props;

  const [inputValue, setInputValue] = useState<string>("");
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleSend = () => {
    onSend(inputValue);
    setInputValue("");
  };
  const onLongPress = () => {
    setPopoverOpen(true);
  };

  const handleEditConfirm = () => {
    onSend(inputValue);
    setInputValue("");
    setEditingMessage(null); // Reset editing state
    setEditingIndex(null);
  };

  const handleEditingLongPress = () => null;

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };

  const longPressEvent = useLongPress(
    editingMessage ? handleEditingLongPress : onLongPress,
    editingMessage ? handleEditConfirm : handleSend,
    defaultOptions,
  );

  const Schema = z.object({
    task: z.string({ required_error: "Please add a task" }),
  });

  const { register, ...form } = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues: {
      task: "",
    },
  });

  const handleAddItem = (type: "todo" | "habit") => {
    if (inputValue.trim()) {
      if (type === "todo") {
        onAddTodo(inputValue);
      } else if (type === "habit") {
        onAddHabit(inputValue);
      }
      setInputValue(""); // Clear input after adding
      setPopoverOpen(false); // Close the dropdown after adding
    }
  };

  useEffect(() => {
    if (editingMessage) {
      setInputValue(editingMessage);
    }
  }, [editingMessage]);

  return (
    <div className="flex items-center w-full space-x-2 text-base">
      <Form {...form} register={register}>
        <form
          onSubmit={form.handleSubmit(handleSend)}
          className=" w-full  pt-5 flex flex-col items-between h-full"
        >
          <FormField
            control={form.control}
            name="task"
            render={() => (
              <FormItem>
                <FormControl>
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Jot down your logs..."
                    className=" rounded-full bg-border  focus-visible:ring-transparent text-base p-1"
                    // onKeyDown={(e) => {
                    //   if (
                    //     e.key === "Enter" &&
                    //     !e.shiftKey &&
                    //     "form" in e.target
                    //   ) {
                    //     e.preventDefault();
                    //     (e.target.form as HTMLFormElement).requestSubmit();
                    //   }
                    // }}
                    end={
                      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                        <PopoverAnchor>
                          <Button
                            {...longPressEvent}
                            className="rounded-full h-7 w-7 "
                          >
                            {editingMessage ? <Check /> : <Send />}
                          </Button>
                        </PopoverAnchor>

                        <PopoverContent
                          side="top"
                          align="end"
                          sideOffset={1}
                          className="flex flex-col bg-primary/80 text-white max-w-32 gap-1 text-xs p-2"
                        >
                          <div onClick={() => handleAddItem("todo")}>
                            Set as a ToDo
                          </div>
                          <Separator />
                          <div onClick={() => handleAddItem("habit")}>
                            Set as a Habit
                          </div>
                        </PopoverContent>
                      </Popover>
                    }
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}

export default JournalInput;
