import { createClient } from "@/utils/supabase/server";
import { data } from "autoprefixer";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log(1111)
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;

  const supabase = createClient();

  const { error} = await supabase.from("notes")
  .insert([{ 
    
    title : code


   }])



  const { data: notes } = await supabase.from("notes").select();


  const responseData = {
    message: 'Process successful',
    code: 0,
    data: notes
  };

  return new Response(JSON.stringify(responseData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
