/*
  Warnings:

  - You are about to drop the column `created_at` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `create_at` on the `ReportCard` table. All the data in the column will be lost.
  - You are about to drop the column `class` on the `Student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Class" DROP COLUMN "created_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "ReportCard" DROP COLUMN "create_at",
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "class",
ADD COLUMN     "class_id" INTEGER;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "dob" TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;
