import { Request, Response } from 'express';
import { prisma } from '..';

export const getCategories = async (req: Request, res: Response) => {
  const postings = await prisma.category.findMany({
    orderBy: [
      {
        createdAt: 'desc',
      },
    ],
  });

  res.status(200).json(postings);
};

export const getCategory = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const category = await prisma.category.findUnique({
    where: {
      id,
    },
  });

  res.status(200).json(category);
};

export const createCategory = async (req: Request, res: Response) => {
  const category = req.body;

  if (!category) {
    res.status(400);
  }

  const newCategory = await prisma.category.create({ data: category });

  res.status(200).json(newCategory);
};

export const editCategory = async (req: Request, res: Response) => {
  const { id, ...category } = req.body;

  if (!category) {
    res.status(400);
  }

  const editedCategory = await prisma.category.update({
    where: {
      id: parseInt(id),
    },
    data: category,
  });

  res.status(200).json(editedCategory);
};

export const deleteCategory = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  await prisma.category.delete({
    where: {
      id,
    },
  });

  res.status(200);
};
