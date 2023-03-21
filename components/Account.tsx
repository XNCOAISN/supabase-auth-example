import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import type { FC, ReactNode } from "react";

export const Account: FC = () => {
  const supabase = useSupabaseClient();
  const user = useUser();

  return (
    <div>
      <div>{user?.email}</div>
      <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
    </div>
  );
};
