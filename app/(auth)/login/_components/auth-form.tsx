"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/lib/actions/users";
import { AuthTokenResponse } from "@supabase/supabase-js";

import { toast } from "sonner";

export default async function AuthForm() {
  const onSubmit = async (formData: FormData) => {
    const { error } = JSON.parse(await login(formData)) as AuthTokenResponse;

    if (error) {
      toast.error(
        error.message ?? "Something went wrong. Please try again later."
      );
    } else {
      toast.success("Successfully login");
    }
  };

  return (
    <form className="flex flex-col gap-2" action={onSubmit}>
      <Label htmlFor="email">Email:</Label>
      <Input id="email" name="email" type="email" required />
      <Label htmlFor="password">Password:</Label>
      <Input id="password" name="password" type="password" required />

      <Button variant={"default"}>Log in</Button>
    </form>
  );
}
