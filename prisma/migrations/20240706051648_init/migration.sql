/*
  Warnings:

  - You are about to drop the column `email` on the `Referral` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Referral` table. All the data in the column will be lost.
  - You are about to drop the column `referral` on the `Referral` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Referral` DROP COLUMN `email`,
    DROP COLUMN `name`,
    DROP COLUMN `referral`,
    ADD COLUMN `refereeEmail` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `refereeName` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `referrerEmail` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `referrerName` VARCHAR(191) NOT NULL DEFAULT '';
