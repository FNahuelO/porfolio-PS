import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Login from "./Login";
import Dashboard from "./Dashboard";
import {
  AdminBackground,
  AdminLogo,
  GlassCard,
  SectionTitle,
  primaryButtonClass,
} from "./ui";

function Screen({ title, children }) {
  return (
    <AdminBackground>
      <div className="min-h-screen flex items-center justify-center px-6">
        <GlassCard className="w-full max-w-[44rem]">
          <div className="flex flex-col items-center gap-4 text-center px-10 py-12 text-[1.5rem]">
            <AdminLogo size="6rem" />
            {title && <SectionTitle>{title}</SectionTitle>}
            {children}
          </div>
        </GlassCard>
      </div>
    </AdminBackground>
  );
}

export default function AdminApp() {
  const [session, setSession] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) return;

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) {
      setIsAdmin(null);
      return;
    }

    supabase
      .from("admins")
      .select("user_id")
      .eq("user_id", session.user.id)
      .maybeSingle()
      .then(({ data }) => setIsAdmin(Boolean(data)));
  }, [session]);

  if (!supabase) {
    return (
      <Screen title="Falta configurar Supabase">
        <p className="m-0">
          Definí <code>VITE_SUPABASE_URL</code> y{" "}
          <code>VITE_SUPABASE_ANON_KEY</code> en <code>.env.local</code> y
          reiniciá el servidor.
        </p>
      </Screen>
    );
  }

  if (loading || (session && isAdmin === null)) {
    return <Screen>Cargando...</Screen>;
  }

  if (!session) {
    return <Login />;
  }

  if (!isAdmin) {
    return (
      <Screen title="Sin permisos">
        <p className="m-0 mb-4">
          La cuenta {session.user.email} no está registrada como administradora.
        </p>
        <button
          className={primaryButtonClass}
          onClick={() => supabase.auth.signOut()}
        >
          Cerrar sesión
        </button>
      </Screen>
    );
  }

  return <Dashboard user={session.user} />;
}
