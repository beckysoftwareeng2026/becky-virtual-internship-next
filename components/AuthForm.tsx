"use client";

import { useState } from "react";
import Button from "./Button";

type Props = {
  buttonText: string;
  onSubmit: (email: string, password: string) => Promise<void>;
};

export default function AuthForm({ buttonText, onSubmit }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await onSubmit(email, password);
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button>{buttonText}</Button>
    </form>
  );
}