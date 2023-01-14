import { Request, Response } from 'express';
import { prisma } from '..';

export const getTags = async (req: Request, res: Response) => {
  const tags = await prisma.tag.findMany({
    orderBy: [
      {
        createdAt: 'desc',
      },
    ],
    include: {
      category: true, // Return all fields
    },
  });

  res.status(200).json(tags);
};

// export const getTagsByCategory = async (req: Request, res: Response) => {
//   const category = req.params.category as Category;

//   if (!(category in Category)) {
//     res.status(500);
//     throw new Error('Invalid Tag category.');
//   }

//   const tags = await prisma.tag.findMany({
//     where: {
//       category,
//     },
//     orderBy: [
//       {
//         createdAt: 'desc',
//       },
//     ],
//   });

//   res.status(200).json(tags);
// };

export const createTag = async (req: Request, res: Response) => {
  const tag = req.body;

  if (!tag) {
    res.status(500);
    throw new Error('Invalid tag.');
  }

  await prisma.tag.create({ data: tag });

  res.status(200).json(tag);
};

export const deleteTag = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    await prisma.tag.delete({
      where: {
        id,
      },
    });

    res.status(200);
  } catch (e) {
    console.error(e);
  }
};
