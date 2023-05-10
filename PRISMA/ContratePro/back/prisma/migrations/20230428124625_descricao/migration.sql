/*
  Warnings:

  - You are about to drop the column `tipo` on the `usercliente` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `userprofissionais` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `usercliente` DROP COLUMN `tipo`;

-- AlterTable
ALTER TABLE `userprofissionais` DROP COLUMN `tipo`;
