import { createClient } from "@/utils/supabase/server";

export async function DELETE(request: Request) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error(error);
  } else if (data.user) {
    const user = data.user;
    console.log("user", user);
    const { data: res, error: err } = await supabase.auth.admin.deleteUser(
      user.id
    );
    if (err) {
      console.error(err);
      return new Response(err.message, { status: 500 });
    } else console.log(res);
  }

  return new Response("", { status: 201 });
}
