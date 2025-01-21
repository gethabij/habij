"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginModel, LoginSchema } from "./validation";
import { HandleError } from "@/lib/utils/handle-error";

function LoginForm() {
  const form = useForm<LoginModel>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginModel) {
    try {
      // await handlePostLogin(redirectTo, values.username, values.password);
      console.log(values.email, values.password);
    } catch (error) {
      console.log(error);
      HandleError(error);
    }
  }
  console.log(form.formState.errors, "form errors");
  return (
    <>
      <h1>Welcome back to Habij</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            // isLoading={loading}
            type="submit"
            className="w-full"
            disabled={!form.formState.isValid}
          >
            Login
          </Button>
        </form>
      </Form>
    </>
  );
}

export default LoginForm;
