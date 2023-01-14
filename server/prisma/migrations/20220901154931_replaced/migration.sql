/*
  Warnings:

  - You are about to drop the `Technologies` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Technology', 'Benefit', 'Quaility');

-- DropTable
DROP TABLE "Technologies";

-- CreateTable
CREATE TABLE "Tags" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "text" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "type" "Type" NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);
