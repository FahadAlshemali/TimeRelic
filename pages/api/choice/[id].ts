import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method) {
    case "GET":
      try {
        const { id }: { id?: string } = req.query;
        const situation = await prisma.situation.findMany({
          where: { situationChoice: { some: { choiceId: +id! } } },
          include: { situationChoice: { include: { choice: true } } },
        });
        res.status(200).json({ situation });
      } catch (e) {
        res.status(500).json({ error: "server is down!" });
      }
      break;
    default:
      res.status(400).json({ message: "Api is not found!" });
  }
}
