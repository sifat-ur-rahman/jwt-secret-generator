"use client";

import { useState } from "react";
import { X, Copy, RefreshCw } from "lucide-react";
import Image from "next/image";

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
  };

  const clearSecret = () => {
    setSecret("");
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4  hidden-scroll">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-lg  ">
            <Image
              src="/main-img.png"
              alt="Logo"
              width={32}
              height={32}
              className="w-22 h-22"
            />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            JWT Secret Generator
          </h1>
          <p className="text-muted-foreground text-sm">
            Generate cryptographically secure random secrets for your JWT
            authentication
          </p>
        </div>

        {/* Card */}
        <div className="bg-card border border-border rounded-2xl shadow-lg p-8">
          {/* Output Section */}
          <div className="mb-8 ">
            <div className="relative">
              {" "}
              <label className="block text-sm font-semibold text-foreground mb-3">
                Generated Secret
              </label>
              {/* Clear Button - X */}
              {secret && (
                <button
                  onClick={clearSecret}
                  className="absolute -top-2 right-2 p-2 rounded-full cursor-pointer text-destructive hover:bg-destructive/20 transition-colors"
                  title="Clear"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            <div className="relative group">
              <div className="bg-muted border border-border rounded-lg p-4 min-h-20 flex items-center font-mono text-sm text-foreground/80 break-all transition-colors group-hover:bg-muted/80">
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
          <div className="bg-muted/50 border border-border rounded-lg p-4 mb-8">
            <p className="text-xs text-muted-foreground font-mono">
              Equivalent to:{" "}
              <span className="text-foreground">
                require('crypto').randomBytes(64).toString('hex')
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={generateSecret}
              className="flex-1 flex items-center cursor-pointer justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              <RefreshCw size={18} />
              Generate Secret
            </button>
            <button
              onClick={copyToClipboard}
              disabled={!secret}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 font-semibold rounded-lg transition-colors ${
                secret
                  ? "bg-green-500/10 text-green-600 cursor-pointer hover:bg-green-500/20 border border-green-500/30"
                  : "bg-muted text-muted-foreground cursor-not-allowed border border-border"
              }`}
            >
              <Copy size={18} />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* Footer Info */}

        <div className="mt-8 text-center text-xs text-muted-foreground space-y-1">
          <p>
            Your secrets are generated locally and never stored or transmitted.
          </p>

          <p>
            Developed with care by{" "}
            <a
              href="https://sifat-ur-rahman.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors font-medium"
            >
              Sifat&nbsp;Ur&nbsp;Rahman
            </a>
          </p>
        </div>
      </div>

      {/* Toast */}
      {copied && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg animate-in fade-in slide-in-from-bottom-4">
          Secret copied to clipboard
        </div>
      )}
    </main>
  );
}
