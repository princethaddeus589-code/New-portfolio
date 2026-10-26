import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";

export default function Auth({ onClose, onSubmit }) {
  const [mode, setMode] = useState("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (mode === "signup" && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Frontend only: connect your backend here later.
    onSubmit?.({
      mode,
      name: name.trim(),
      email: email.trim(),
      password
    });
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <form
        className="signin-modal"
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close icon-button"
          type="button"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="brand-mark signin-mark">
          <span>p</span>
        </div>

        <span className="eyebrow">
          {mode === "signup"
            ? "CREATE YOUR FREE ACCOUNT"
            : "WELCOME BACK TO PORTFOLIA"}
        </span>

        <h2>
          {mode === "signup" ? (
            <>Your story.<br /><em>Your space.</em></>
          ) : (
            <>Your next chapter<br /><em>starts here.</em></>
          )}
        </h2>

        <p>
          {mode === "signup"
            ? "Create an account to start building your portfolio."
            : "Sign in to continue building your portfolio."}
        </p>

        {mode === "signup" && (
          <label>
            Full name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              autoComplete="name"
              required
            />
          </label>
        )}

        <label>
          Email address
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 8 characters"
            autoComplete={mode === "signup" ? "new-password" : "current-password"}
            minLength={8}
            required
          />
        </label>

        {mode === "signup" && (
          <label>
            Confirm password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Enter your password again"
              autoComplete="new-password"
              minLength={8}
              required
            />
          </label>
        )}

        {error && <p className="auth-error">{error}</p>}

        <button className="button button-dark full-button" type="submit">
          {mode === "signup" ? "Create account" : "Sign in"}
          <ArrowRight size={16} />
        </button>

        <div className="auth-switch">
          {mode === "signup"
            ? "Already have an account?"
            : "New to Portfolia?"}

          <button
            type="button"
            onClick={() => {
              setMode(mode === "signup" ? "signin" : "signup");
              setError("");
              setConfirmPassword("");
            }}
          >
            {mode === "signup" ? "Sign in" : "Create an account"}
          </button>
        </div>

        <small>
          Frontend preview only. Connect your backend for secure accounts.
        </small>
      </form>
    </div>
  );
}