/*
  Warnings:

  - You are about to drop the `Posting` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Technology` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Posting";

-- DropTable
DROP TABLE "Technology";

-- CreateTable
CREATE TABLE "Postings" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "companyName" VARCHAR(255) NOT NULL,
    "url" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Postings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Technologies" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "type" "Type" NOT NULL,

    CONSTRAINT "Technologies_pkey" PRIMARY KEY ("id")
);
