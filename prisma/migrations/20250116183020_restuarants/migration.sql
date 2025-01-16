-- CreateTable
CREATE TABLE "Restaurants" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "foodType" TEXT NOT NULL,
    "priceRange" TEXT NOT NULL,
    "restuarantType" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Restaurants_pkey" PRIMARY KEY ("id")
);
