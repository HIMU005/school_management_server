-- CreateTable
CREATE TABLE "Banner" (
    "id" SERIAL NOT NULL,
    "bgImage" TEXT NOT NULL,
    "buttonTitle" TEXT NOT NULL,
    "direction" TEXT NOT NULL,

    CONSTRAINT "Banner_pkey" PRIMARY KEY ("id")
);
