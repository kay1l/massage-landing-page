"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoginPayload } from "@/types/auth";
import { authServices } from "@/services/authService";
import { loginSuccess } from "@/redux/actions/userActions";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import Image from "next/image";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClick = () => {
    router.push("/auth/register");
  };

  const [formData, setFormData] = useState<LoginPayload>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });

    setErrors((prev) => ({ ...prev, [e.target.id]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await authServices.loginUser(formData);

      if (response.status) {
        dispatch(loginSuccess(response.user));
        const { access_token } = response;

        if (!localStorage.getItem("access_token")) {
          localStorage.setItem("access_token", access_token);
        }

        toast.success("Login successful!", {
          description: response.message || "Welcome back!",
        });

        router.push("/dashboard");
      } else {
        let errorMsg = response.message;
        if (errorMsg?.toLowerCase().includes("invalid")) {
          errorMsg = "Your email or password is incorrect.";
        }
        toast.error("Login failed", {
          description: errorMsg || "Please try again.",
        });
      }
    } catch (error: any) {
      let errorMsg = "Incorrect email or password.";
      if (error.response?.status === 401) {
        errorMsg = "Incorrect email or password.";
      } else if (error.response?.status === 500) {
        errorMsg = "Server error. Please try again later.";
      } else if (error.message?.includes("Network Error")) {
        errorMsg = "Unable to connect. Please check your internet connection.";
      }
      toast.error("Login failed", { description: errorMsg });
    } finally {
      setLoading(false);
    }
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
          <form className="p-6 md:p-8" onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl text-[#5C4A42] font-bold">
                  Welcome back
                </h1>
                <p className="text-[#5C4A42]/70">Login to your account</p>
              </div>

              {/* Email */}
              <div className="grid gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={cn(
                    "rounded-xl border-gray-300 focus:ring-[#FFB22C]",
                    errors.email && "border-red-500 focus:ring-red-500"
                  )}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="grid gap-1.5">
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
                  value={formData.password}
                  onChange={handleChange}
                  className={cn(
                    "rounded-xl border-gray-300 focus:ring-[#FFB22C]",
                    errors.password && "border-red-500 focus:ring-red-500"
                  )}
                />
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FA812F] hover:bg-[#FFB22C] text-white text-sm font-medium py-2 rounded-full transition"
              >
                {loading ? "Logging in..." : "Login"}
              </Button>

              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-[#F3C623]">
                <span className="bg-white text-[#5C4A42]/60 relative z-10 px-2"></span>
              </div>

              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <span
                  onClick={handleClick}
                  className="underline text-[#FA812F] cursor-pointer underline-offset-4"
                >
                  Sign up
                </span>
              </div>
            </div>
          </form>

          <div className="bg-[#F3C623]/10 relative hidden md:flex items-center justify-center">
            <Image
              src="/images/final.png"
              alt="Image"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </CardContent>
      </Card>

      <div className="text-[#5C4A42]/70 text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4 *:[a]:hover:text-[#FA812F]">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
