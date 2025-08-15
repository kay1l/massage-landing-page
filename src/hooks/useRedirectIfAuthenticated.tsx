"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * Redirects user to /dashboard if already authenticated.
 * Looks for 'access_token' in localStorage.
 */
export const useRedirectIfAuthenticated = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token) {
      router.replace("/dashboard");
    }
  }, [router]);
};
