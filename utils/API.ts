import axios from "axios";

export const createUser = async (values: any, id: any) => {
  const res = await axios.post("/api/user", { ...values, id: id });
  const user = await res.data.newUser;
  console.log(user);
};

// export const getChoice = async (id:any) => {
//   try {
  
//     const res = await axios.get(`/api/choice/${id}` );
//     console.log(res.data);
//   } catch (error) {
//     console.log(error);
//   }
// };
