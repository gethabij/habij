"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Props from "./types";
import { Send } from "lucide-react";
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

function JournalInput(props: Readonly<Props>) {
  const { onSend } = props;

  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    onSend(inputValue);
    setInputValue("");
  };

  const Schema = z.object({
    task: z.string({ required_error: "Please add a task" }),
  });

  const { register, ...form } = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues: {
      task: "",
    },
  });

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
                    className=" rounded-full bg-border  focus-visible:ring-transparent text-base"
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
                      <Button
                        onClick={handleSend}
                        className="rounded-full py-6 px-4 "
                      >
                        <Send />
                      </Button>
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
