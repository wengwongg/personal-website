"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ThemeSwitch(): JSX.Element | undefined {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return undefined;
  }

  if (resolvedTheme === "dark") {
    return (
      <input
        onClick={() => setTheme("light")}
        type="checkbox"
        className="toggle my-4"
        checked
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <input
        onClick={() => setTheme("dark")}
        type="checkbox"
        className="toggle my-4"
      />
    );
  }
}
