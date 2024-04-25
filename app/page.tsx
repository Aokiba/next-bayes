import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button"
// import { Box } from '@shadcn/ui';





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
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-cover bg-center" style={{ backgroundImage: "url('/images/background.jpg')" }}>
    <div className="text-center p-10 backdrop-blur-md bg-white/30 rounded-lg">
      <h1 className="text-6xl font-bold text-white mb-5">
        欢迎来到我们的网站!
      </h1>

      <div className="animate-bounce">
        <Button color="primary">了解更多</Button>
      </div>
    </div>
  </div>

//   <Box
//   css={{
//     width: '100vw', // 视口宽度
//     height: '100vh', // 视口高度
//     backgroundImage: 'url(/background.jpg)',
//     backgroundPosition: 'center', // 背景图片居中
//     backgroundRepeat: 'no-repeat', // 不重复
//     backgroundSize: 'cover', // 覆盖整个容器
//   }}
// >
//   {/* 页面内容 */}
// </Box>
  );
}
