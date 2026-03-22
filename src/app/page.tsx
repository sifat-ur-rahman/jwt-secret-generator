"use client";

import { useState } from "react";
import { X, Copy, RefreshCw } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

export default function JWTGenerator() {
  const [secret, setSecret] = useState("");
  const [copied, setCopied] = useState(false);

  const generateSecret = () => {
    const bytes = new Uint8Array(64);
    crypto.getRandomValues(bytes);
    const hex = Array.from(bytes)
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    setSecret(hex);
  };

  const copyToClipboard = () => {
    if (!secret) return;
    navigator.clipboard.writeText(secret);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success("Secret copied to clipboard");
  };

  const clearSecret = () => {
    setSecret("");
  };

  return (
    <main className="bg-background hidden-scroll flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex h-32 w-32 items-center justify-center rounded-lg">
            <Image
              src="/main-img.png"
              alt="Logo"
              width={32}
              height={32}
              className="h-22 w-22"
            />
          </div>
          <h1 className="text-foreground mb-2 text-3xl font-bold">
            JWT Secret Generator
          </h1>
          <p className="text-muted-foreground text-sm">
            Generate cryptographically secure random secrets for your JWT
            authentication
          </p>
        </div>

        {/* Card */}
        <div className="bg-card border-border rounded-2xl border p-5 shadow-lg md:p-8">
          {/* Output Section */}
          <div className="mb-8">
            <div className="relative">
              {" "}
              <label className="text-foreground mb-3 block text-sm font-semibold">
                Generated Secret
              </label>
              {/* Clear Button - X */}
              {secret && (
                <button
                  onClick={clearSecret}
                  className="text-destructive hover:bg-destructive/20 absolute -top-2 right-2 cursor-pointer rounded-full p-2 transition-colors"
                  title="Clear"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            <div className="group relative">
              <div className="bg-muted border-border text-foreground/80 group-hover:bg-muted/80 flex min-h-20 items-center rounded-lg border p-4 font-mono text-sm break-all transition-colors">
                {secret ? (
                  secret
                ) : (
                  <span className="text-muted-foreground">
                    Click Generate to create a secret
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-muted/50 border-border mb-8 rounded-lg border p-4">
            <p className="text-muted-foreground font-mono text-xs">
              Equivalent to:{" "}
              <span className="text-foreground">
                require('crypto').randomBytes(64) <br className="md:hidden" />
                .toString('hex')
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-5 md:flex-row md:gap-3">
            <button
              onClick={generateSecret}
              className="bg-primary text-primary-foreground hover:bg-primary/90 flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-3 font-semibold transition-colors"
            >
              <RefreshCw size={18} />
              Generate Secret
            </button>
            <button
              onClick={copyToClipboard}
              disabled={!secret}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 font-semibold transition-colors ${
                secret
                  ? "cursor-pointer border border-green-500/30 bg-green-500/10 text-green-600 hover:bg-green-500/20"
                  : "bg-muted text-muted-foreground border-border cursor-not-allowed border"
              }`}
            >
              <Copy size={18} />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* Footer Info */}

        <div className="text-muted-foreground mt-8 space-y-1 text-center text-xs">
          <p>
            Your secrets are generated locally and never stored or transmitted.
          </p>

          <p>
            Developed with care by{" "}
            <a
              href="https://sifat-ur-rahman.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground font-medium underline transition-colors"
            >
              Sifat&nbsp;Ur&nbsp;Rahman
            </a>
          </p>
        </div>
      </div>

      {/* Toast
      {copied && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg animate-in fade-in slide-in-from-bottom-4">
          Secret copied to clipboard
        </div>
      )} */}
    </main>
  );
}
