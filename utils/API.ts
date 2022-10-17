import axios from "axios";

export const createUser = async (values: any, id: any) => {
  const res = await axios.post("/api/user", { ...values, id: id });
  const user = await res.data.newUser;
  console.log(user)
};
