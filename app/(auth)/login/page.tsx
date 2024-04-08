import { Button } from "@/components/ui/button";
import { login, signUp } from "./actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <form className="flex flex-col gap-2">
        <Label htmlFor="email">Email:</Label>
        <Input id="email" name="email" type="email" required />
        <Label htmlFor="password">Password:</Label>
        <Input id="password" name="password" type="password" required />
        <Button variant={"default"} formAction={login}>
          Log in
        </Button>
        <Button variant={"secondary"} formAction={signUp}>
          Sign up
        </Button>
      </form>
    </div>
  );
}
