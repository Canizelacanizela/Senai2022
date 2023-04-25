/*
  Warnings:

  - You are about to drop the column `id_coment` on the `userprofissionais` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `userprofissionais` DROP FOREIGN KEY `UserProfissionais_id_coment_fkey`;

-- AlterTable
ALTER TABLE `userprofissionais` DROP COLUMN `id_coment`;
