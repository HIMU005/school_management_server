/*
  Warnings:

  - You are about to drop the column `trasnactionId` on the `Payment` table. All the data in the column will be lost.
  - Added the required column `transactionId` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "trasnactionId",
ADD COLUMN     "transactionId" TEXT NOT NULL;
