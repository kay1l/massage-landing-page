"use client";

import LoadingScreen from "@/custom_components/LoadingScreen";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function withAuth<P extends object>(WrappedComponent: React.ComponentType<P>) {
  return function ProtectedRoute(props: P) {
    const router = useRouter();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
      const token = localStorage.getItem("access_token");

      if (!token) {
        router.replace("/auth/login"); 
      } else {
        setIsChecking(false); // allow rendering
      }
    }, [router]);

    if (isChecking) {
      return <LoadingScreen />; 
    }

    return <WrappedComponent {...props} />;
  };
}
