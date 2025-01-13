/*
  Warnings:

  - Added the required column `description` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "description" TEXT NOT NULL;
