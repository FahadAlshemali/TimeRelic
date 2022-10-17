// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {  email, userName, password } = req.body;
  switch (req.method) {
    case "GET":
      const user = await prisma.user.findMany({ where: { email } });
      if (!user) {
        return res.status(400).json("user not found");
      }
      res.status(200).json({ user });
      break;
    case "POST":
      try {
        const newUser = await prisma.user.create({
          data: {
            email,
            userName,
            password,
          },
        });
        res.status(200).json({ newUser });
      } catch (error) {
        res.status(400).json({ message: console.log(error) });
      }
      break;
    default:
      res.status(404).json("what are you doing here ?");
  }
}
