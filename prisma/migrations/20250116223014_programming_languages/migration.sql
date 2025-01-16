-- CreateTable
CREATE TABLE "ProgrammingLanguage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "runtime" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProgrammingLanguage_pkey" PRIMARY KEY ("id")
);
