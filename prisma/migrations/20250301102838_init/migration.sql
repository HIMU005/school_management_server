/*
  Warnings:

  - You are about to drop the column `createAt` on the `ReportCard` table. All the data in the column will be lost.
  - Made the column `student_id` on table `Guardian` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Guardian" ALTER COLUMN "student_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "ReportCard" DROP COLUMN "createAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
