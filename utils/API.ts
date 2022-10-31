import axios from "axios";
import { SupabaseClient } from '@supabase/auth-helpers-react';



// export const createUser = async (values: any, id: any) => {
//   const res = await axios.post("/api/user", { ...values, id: id });
//   const user = await res.data.newUser;
//   console.log(user);
// };
type User = {
  email: string,
  password: string,
  userName: string

}

export const createUSer = async (user: User, supabaseClient: SupabaseClient<any, "public", any>) => {
  const supabaseAuthRes = await supabaseClient.auth.signUp({ email: user.email, password: user.password })
  console.log(supabaseAuthRes?.data?.user?.id)
  const res = await axios.post('/api/user', { ...user, id: supabaseAuthRes?.data?.user?.id as string})
  
}
