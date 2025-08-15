"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { authServices } from "@/services/authService";
import type { RegisterPayload } from "@/types/auth";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();

  const [formData, setFormData] = useState<RegisterPayload>({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await authServices.registerUser(formData);
  
      if (response.status) {
        toast.success("Registration successful!", {
          description: response.message,
        });
        router.push("/auth/login");
      } else {
        toast.error("Registration failed", {
          description: response.message,
        });
      }
    } catch (error: any) {
      console.error("Registration error:", error.response?.data || error);
      toast.error("Registration failed", {
        description:
          error.response?.data?.message || "An unexpected error occurred.",
      });
    } finally {
      setLoading(false);
    }
  };
  

  const handleClick = () => {
    router.push("/auth/login");
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-6 bg-[#FEF3E2] text-[#5C4A42] p-4 rounded-xl",
        className
      )}
      {...props}
    >
      <Card className="overflow-hidden p-0 bg-white shadow-md rounded-xl">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl text-[#5C4A42] font-bold">Create Account</h1>
                <p className="text-[#5C4A42]/70 text-balance">
                  Sign up to book relaxing massage therapy sessions
                </p>
              </div>

              {/* Full Name */}
              <div className="grid gap-3">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded-xl border-gray-300 focus:ring-[#FFB22C]"
                />
              </div>

              {/* Email */}
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-xl border-gray-300 focus:ring-[#FFB22C]"
                />
              </div>

              {/* Password */}
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="rounded-xl border-gray-300 focus:ring-[#FFB22C]"
                />
              </div>

              {/* Confirm Password */}
              <div className="grid gap-3">
                <Label htmlFor="password_confirmation">Confirm Password</Label>
                <Input
                  id="password_confirmation"
                  type="password"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  required
                  className="rounded-xl border-gray-300 focus:ring-[#FFB22C]"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FA812F] hover:bg-[#FFB22C] text-white text-sm font-medium py-2 rounded-full transition"
              >
                {loading ? "Registering..." : "Register"}
              </Button>

              <div className="after:border-[#F3C623] relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-white text-[#5C4A42]/60 relative z-10 px-2">
                  or
                </span>
              </div>

              <div className="text-center text-sm">
                Already have an account?{" "}
                <span
                  onClick={handleClick}
                  className="underline text-[#FA812F] cursor-pointer underline-offset-4"
                >
                  Login
                </span>
              </div>
            </div>
          </form>

          {/* Right Side Image */}
          <div className="bg-[#F3C623]/10 relative hidden md:block">
            <img
              src="/images/rock.jpg"
              alt="Massage therapy"
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
