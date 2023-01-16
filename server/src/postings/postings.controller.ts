import { Request, Response } from 'express';
import { prisma } from '../../index';

export const getPostings = async (req: Request, res: Response) => {
  const postings = await prisma.posting.findMany({
    orderBy: [
      {
        createdAt: 'desc',
      },
    ],
  });

  res.status(200).json(postings);
};

export const getPosting = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const posting = await prisma.posting.findUnique({
    where: {
      id,
    },
  });

  res.status(200).json(posting);
};

export const createPosting = async (req: Request, res: Response) => {
  const posting = req.body;

  if (!posting) {
    res.status(400);
  }

  const newPosting = await prisma.posting.create({
    data: { ...posting, analyzedDescription: '' },
  });

  res.status(200).json(newPosting);
};

export const editPosting = async (req: Request, res: Response) => {
  const { id, ...posting } = req.body;

  if (!posting) {
    res.status(400);
  }

  const editedPosting = await prisma.posting.update({
    where: {
      id: parseInt(id),
    },
    data: posting,
  });

  res.status(200).json(editedPosting);
};

export const deletePosting = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  await prisma.posting.delete({
    where: {
      id,
    },
  });

  res.status(200);
};
