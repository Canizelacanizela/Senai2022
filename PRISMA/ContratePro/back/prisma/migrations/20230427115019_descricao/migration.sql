/*
  Warnings:

  - Added the required column `tipo` to the `UserCliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `UserProfissionais` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usercliente` ADD COLUMN `tipo` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `userprofissionais` ADD COLUMN `tipo` VARCHAR(191) NOT NULL;
