// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Rex, PrismaClient } from "@prisma/client";

// Let's bring back everything when we interact with the DB
const include = {
  exportCountry: true,
  products: true,
  certificate: true,
  dairyOptions: true,
  history: true,
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Rex | { error: String }>
) {
  const { rexId } = req.query;

  if (!rexId) {
    res.status(400).json({
      error: "Missing rexId query parameter",
    });
    return;
  }

  if (Array.isArray(rexId)) {
    res.status(400).json({
      error: "rexId query parameter must be a string",
    });
    return;
  }

  const prisma = new PrismaClient();

  switch (req.method) {
    case "GET":
      const rex = await prisma.rex.findFirst({
        where: {
          id: {
            equals: Number.parseInt(rexId),
          },
        },
        include,
      });

      if (!rex) {
        res.status(404).json({
          error: "Rex not found",
        });
        return;
      }

      res.status(200).json(rex);
      return;
    case "PATCH":
      const { certificate, countryId, dairyOptions, products, ...rest } =
        req.body;

      if (products) {
        res.status(418).json({
          error: "Products are managed on /products sub route",
        });
        return;
      }

      const updateData = {
        ...rest,
      };

      if (certificate) {
        updateData.certificate = {
          upsert: {
            create: {
              ...certificate,
            },
            update: {
              ...certificate,
            },
          },
        };
      }

      if (countryId) {
        updateData.exportCountry = {
          connect: {
            id: Number.parseInt(countryId),
          },
        };
      }

      if (dairyOptions) {
        updateData.dairyOptions = {
          upsert: {
            create: {
              ...dairyOptions,
            },
            update: {
              ...dairyOptions,
            },
          },
        };
      }

      const rexPatch = await prisma.rex.update({
        where: {
          rexNumber: rexId,
        },
        data: updateData,
        include,
      });

      if (!rexPatch) {
        res.status(404).json({
          error: "Rex not found",
        });
        return;
      }

      res.status(200).json(rexPatch);
      return;
    default:
      res.setHeader("Allow", ["GET", "PATCH"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      return;
  }
}