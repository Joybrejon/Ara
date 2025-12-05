"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift } from "lucide-react";

const Login = () => {
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-palette-light to-palette-accent px-4 pt-4 pb-16">
      <Card className="w-full max-w-md shadow-2xl rounded-xl border border-palette-accent/50 bg-white/30 backdrop-blur-md my-8 py-10 animate-fade-in-scale">
        <CardHeader className="text-center">
          <Gift className="mx-auto h-16 w-16 text-palette-secondary mb-4 animate-bounce" />
          <CardTitle className="text-3xl font-bold text-palette-primary flex items-center justify-center gap-2 mb-4">
            Special Surprise
          </CardTitle>
          <CardDescription className="text-palette-primary/80 mt-4 mb-8">
            Enter your birthdate to unlock my gift
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-[2px]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="password" className="text-lg font-medium text-palette-secondary">Your Birthdate</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your birthdate (DDMMYYYY)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 text-base border-palette-accent focus:border-palette-secondary focus:ring-palette-secondary shadow-sm rounded-2xl bg-white/20 backdrop-blur-sm"
                required
              />
            </div>
            <Button type="submit" className="w-full py-3 text-lg bg-white/30 backdrop-blur-md text-palette-primary font-semibold transition-all duration-300 rounded-2xl shadow-lg hover:bg-white/50 hover:scale-105"> {/* Mengubah rounded-full menjadi rounded-2xl */}
              Unlock My Gift
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;