// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {  story_text, userName, password } = req.body;
  switch (req.method) {
    case "GET":
      const situation = await prisma.situation.findMany({include:{
        situationChoice:{include:{choice:true}}
      }  });
      if (!situation) {
        return res.status(400).json("not found");
      }
      res.status(200).json({ situation });
      break;
    default:
      res.status(404).json("hmmm! ?");
  }
}
