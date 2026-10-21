import { useState } from "react";
import { supabase } from "../lib/supabase";
import {
  AdminBackground,
  AdminLogo,
  ErrorMessage,
  Field,
  GlassCard,
  SectionTitle,
  inputClass,
  primaryButtonClass,
} from "./ui";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) setError("Email o contraseña incorrectos.");
    setSubmitting(false);
  };

  return (
    <AdminBackground>
      <div className="min-h-screen flex items-center justify-center px-6 py-16">
        <div className="relative w-full max-w-[44rem]">
          <div className="absolute -top-[9rem] -right-[6rem] w-[22rem] px-8 py-6 bg-[#f9b233] rounded-[2rem] text-white text-[1.4rem] leading-[1.4] shadow-[14px_9px_7.7px_0px_#68009940] z-20 after:absolute after:content-[''] after:bottom-[-2.2rem] after:left-[4rem] after:rotate-[14deg] after:border-x-[1.5rem] after:border-x-transparent after:border-t-[3rem] after:border-t-[#f9b233] max-md:hidden">
            ¡Hola! Ingresá para gestionar tus trabajos.
          </div>

          <GlassCard>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 px-10 py-12 max-md:px-6"
            >
              <div className="flex flex-col items-center gap-4 mb-2">
                <AdminLogo size="6rem" />
                <SectionTitle>Panel admin</SectionTitle>
              </div>

              <Field label="Email">
                <input
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </Field>

              <Field label="Contraseña">
                <input
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={inputClass}
                />
              </Field>

              {error && <ErrorMessage>{error}</ErrorMessage>}

              <button
                type="submit"
                disabled={submitting}
                className={`${primaryButtonClass} mt-2 w-full`}
              >
                {submitting ? "Ingresando..." : "Ingresar"}
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </AdminBackground>
  );
}
