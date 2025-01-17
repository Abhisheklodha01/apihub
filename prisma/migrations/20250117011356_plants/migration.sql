/*
  Warnings:

  - You are about to drop the column `color` on the `Plants` table. All the data in the column will be lost.
  - You are about to drop the column `flowerType` on the `Plants` table. All the data in the column will be lost.
  - Added the required column `species` to the `Plants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Plants" DROP COLUMN "color",
DROP COLUMN "flowerType",
ADD COLUMN     "species" TEXT NOT NULL;
