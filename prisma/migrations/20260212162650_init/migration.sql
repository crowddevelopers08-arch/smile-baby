/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "treatment" TEXT,
    "procedure" TEXT,
    "message" TEXT,
    "city" TEXT,
    "age" TEXT,
    "pincode" TEXT,
    "consent" BOOLEAN NOT NULL DEFAULT false,
    "source" TEXT,
    "formName" TEXT NOT NULL DEFAULT 'Website Leads',
    "status" TEXT NOT NULL DEFAULT 'new',
    "telecrmSynced" BOOLEAN NOT NULL DEFAULT false,
    "telecrmId" TEXT,
    "whatsappNumber" TEXT,
    "womansAgeBracket" TEXT,
    "tryingDuration" TEXT,
    "preferredCallbackTime" TEXT,
    "isWhatsapp" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);
