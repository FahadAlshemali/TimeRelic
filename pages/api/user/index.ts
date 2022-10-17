// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id, email, userName, password } = req.body;
  switch (req.method) {
    case "GET":
      const user = await prisma.user.findFirst({ where: { email } });
      if (!user) {
        return res.status(400).json("user not found");
      }
      break;
    case "POST":
      try {
        const newUser = await prisma.user.create({
          data: {
            id,
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
      res.status(404).json("not found");
  }
}
