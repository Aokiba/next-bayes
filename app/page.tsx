import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button"
import { Menu } from "@/components/menu"





export default async function Index() {
  const canInitSupabaseClient = () => {
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-cover bg-center" style={{ backgroundImage: "url('/images/background.jpg')" }}>
    // <div className="hidden md:block" >
    <div  >
    <Menu />
  </div>


  );
}
