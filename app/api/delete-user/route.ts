import { createClient } from "@/utils/supabase/server";

export async function DELETE(request: Request) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error(error);
  } else if (data.user) {
    const user = data.user;
    console.log("user", user);
  }

  return new Response("", { status: 201 });
}
