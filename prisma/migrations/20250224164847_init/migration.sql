/*
  Warnings:

  - You are about to drop the column `profileImge` on the `User` table. All the data in the column will be lost.
  - Added the required column `photoURL` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "profileImge",
ADD COLUMN     "photoURL" TEXT NOT NULL;
