/*
  Warnings:

  - Added the required column `location` to the `Posting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numOfApplicants` to the `Posting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postedAt` to the `Posting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Posting" ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "numOfApplicants" TEXT NOT NULL,
ADD COLUMN     "postedAt" TEXT NOT NULL;
