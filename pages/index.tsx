import type { NextPage } from "next";
import { Auth } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Account } from "../components/Account";
import * as ja from "../i18n/ja.json";

const Home: NextPage = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {session ? (
        <Account />
      ) : (
        <div style={{ width: "400px" }}>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={["google"]}
            localization={{ variables: ja }}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
