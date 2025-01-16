-- CreateTable
CREATE TABLE "Quotes" (
    "id" SERIAL NOT NULL,
    "author" TEXT NOT NULL,
    "quote" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Quotes_pkey" PRIMARY KEY ("id")
);
