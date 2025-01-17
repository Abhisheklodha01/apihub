/*
  Warnings:

  - Added the required column `imageUrl` to the `Flowers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Flowers" ADD COLUMN     "imageUrl" TEXT NOT NULL;
