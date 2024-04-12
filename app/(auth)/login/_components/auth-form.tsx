"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/lib/actions/auth";
import { AuthSchema, authSchema } from "@/lib/types/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthTokenResponse } from "@supabase/supabase-js";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: AuthSchema) => {
    const { error } = JSON.parse(await login(data)) as AuthTokenResponse;

    if (error) {
      toast.error(error.message ?? "Something went wrong. Please try again.");
    } else {
      toast.success("Login successful");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 min-w-72"
    >
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" {...register("email")} />
      {errors.email && <p>Email is required</p>}

      <Label htmlFor="password">Password</Label>
      <Input type="password" id="password" {...register("password")} />
      {errors.password && <p>Password is required</p>}

      <Button type="submit" variant="default">
        Login
      </Button>
    </form>
  );
}
