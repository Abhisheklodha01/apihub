/*
  Warnings:

  - Added the required column `imageUrl` to the `Books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Books" ADD COLUMN     "imageUrl" TEXT NOT NULL;
