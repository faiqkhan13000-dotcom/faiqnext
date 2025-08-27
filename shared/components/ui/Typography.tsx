"use client";

import React from "react";

interface TypographyProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}

const baseStyles = {
  h1: "text-4xl font-bold text-gray-900",
  h2: "text-3xl font-semibold text-gray-800",
  h3: "text-2xl font-semibold text-gray-800",
  h4: "text-xl font-medium text-gray-700",
  h5: "text-lg font-medium text-gray-700",
  h6: "text-base font-medium text-gray-600",
};

export function Typography({
  as: Tag = "h1",
  children,
  className = "",
}: TypographyProps) {
  const styles = baseStyles[Tag];
  return <Tag className={`${styles} ${className}`}>{children}</Tag>;
}
