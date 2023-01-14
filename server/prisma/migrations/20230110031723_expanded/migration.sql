/*
  Warnings:

  - You are about to drop the column `colour` on the `Category` table. All the data in the column will be lost.
  - Added the required column `color` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "colour",
ADD COLUMN     "color" TEXT NOT NULL;
