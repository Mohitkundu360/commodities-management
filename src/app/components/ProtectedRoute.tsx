"use client";

import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: ("Manager" | "Store Keeper")[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { token, role } = useAuth();
  const router = useRouter();
  const [checked, setChecked] = useState(false); // To prevent flashing

  useEffect(() => {
    if (!token) {
      router.replace("/login");
    } else if (role && !allowedRoles.includes(role)) {
      toast.error("Access Denied: You do not have permission.");
      router.replace("/login");
    } else {
      setChecked(true);
    }
  }, [token, role, allowedRoles, router]);

  if (!token || (role && !allowedRoles.includes(role)) || !checked) {
    return null; // You can return a spinner here if desired
  }

  return <>{children}</>;
}