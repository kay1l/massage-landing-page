"use client"

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();

  const handleClick = () => {
    router.push('/auth/register');
  }
  return (
    <div
      className={cn("flex flex-col gap-6 bg-[#FEF3E2] text-[#5C4A42] p-4 rounded-xl", className)}
      {...props}
    >
      <Card className="overflow-hidden p-0 bg-white shadow-md rounded-xl">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl text-[#5C4A42] font-bold">Welcome back</h1>
                <p className="text-[#5C4A42]/70 text-balance">
                  Login to your Acme Inc account
                </p>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="rounded-xl border-gray-300 focus:ring-[#FFB22C]"
                />
              </div>

              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm text-[#FA812F] underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  className="rounded-xl border-gray-300 focus:ring-[#FFB22C]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#FA812F] hover:bg-[#FFB22C] text-white text-sm font-medium py-2 rounded-full transition"
              >
                Login
              </Button>

              <div className="after:border-[#F3C623] relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-white text-[#5C4A42]/60 relative z-10 px-2">
                  
                </span>
              </div>

              <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
                <span onClick={handleClick} className="underline text-[#FA812F] cursor-pointer underline-offset-4">
                Sign up
                </span>
              </div>
            </div>
          </form>

          {/* Right Side Image */}
          <div className="bg-[#F3C623]/10 relative hidden md:block">
            <img
              src="/images/rock.jpg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>

      <div className="text-[#5C4A42]/70 *:[a]:hover:text-[#FA812F] text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our{" "}
        <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
