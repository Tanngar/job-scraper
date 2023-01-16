import { Request, Response } from 'express';
import { prisma } from '../../index';

export const getTags = async (req: Request, res: Response) => {
  const tags = await prisma.tag.findMany({
    orderBy: [
      {
        createdAt: 'desc',
      },
    ],
    include: {
      category: true,
    },
  });

  res.status(200).json(tags);
};

export const getTagsByCategoryId = async (req: Request, res: Response) => {
  const { categoryId } = req.body;

  const tags = await prisma.tag.findMany({
    where: {
      categoryId,
    },
    orderBy: [
      {
        createdAt: 'desc',
      },
    ],
  });

  res.status(200).json(tags);
};

export const createTag = async (req: Request, res: Response) => {
  const { text, type } = req.body;
  const cateogryId = parseInt(req.body.categoryId);

  const tag = await prisma.tag.create({
    data: { text, type, category: { connect: { id: cateogryId } } },
  });

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
