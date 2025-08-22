-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('MEMBER', 'ADMIN');

-- CreateEnum
CREATE TYPE "public"."VerificationStatus" AS ENUM ('PENDING', 'VERIFIED');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "hash" TEXT NOT NULL,
    "pfp" TEXT NOT NULL DEFAULT '',
    "xpPoint" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SkillTree" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "creatorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SkillTree_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SkillNode" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "xpPoint" INTEGER NOT NULL DEFAULT 100,
    "skillTreeId" TEXT,
    "parentNodeId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SkillNode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Post" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "proofMedia" TEXT NOT NULL,
    "skillNodeId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SkillTreeUser" (
    "skillTreeId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL DEFAULT 'MEMBER',
    "verificationStatus" "public"."VerificationStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "SkillTreeUser_pkey" PRIMARY KEY ("skillTreeId","userId")
);

-- CreateTable
CREATE TABLE "public"."SkillNodeUser" (
    "skillNodeId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "xpPoint" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "SkillNodeUser_pkey" PRIMARY KEY ("skillNodeId","userId")
);

-- CreateTable
CREATE TABLE "public"."Feedback" (
    "verifierId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "feedbackText" TEXT NOT NULL,
    "multiplier" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("verifierId","postId")
);

-- CreateTable
CREATE TABLE "public"."Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isRestricted" BOOLEAN NOT NULL DEFAULT false,
    "restrictionDescription" TEXT NOT NULL DEFAULT 'You are not allowed to view the SkillTree because of community restrictions.',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Event" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "isRanked" BOOLEAN NOT NULL DEFAULT false,
    "xpPayout" INTEGER NOT NULL DEFAULT 0,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3) NOT NULL,
    "winnerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_SkillTreeTags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_SkillTreeTags_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_PostLikes" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PostLikes_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_EventParticipants" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_EventParticipants_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "User_name_idx" ON "public"."User"("name");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "SkillTree_name_idx" ON "public"."SkillTree"("name");

-- CreateIndex
CREATE INDEX "SkillNode_name_idx" ON "public"."SkillNode"("name");

-- CreateIndex
CREATE INDEX "SkillNode_description_idx" ON "public"."SkillNode"("description");

-- CreateIndex
CREATE INDEX "Post_content_idx" ON "public"."Post"("content");

-- CreateIndex
CREATE INDEX "Feedback_feedbackText_idx" ON "public"."Feedback"("feedbackText");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "public"."Tag"("name");

-- CreateIndex
CREATE INDEX "Tag_name_idx" ON "public"."Tag"("name");

-- CreateIndex
CREATE INDEX "Event_title_idx" ON "public"."Event"("title");

-- CreateIndex
CREATE INDEX "Event_startDate_idx" ON "public"."Event"("startDate");

-- CreateIndex
CREATE INDEX "_SkillTreeTags_B_index" ON "public"."_SkillTreeTags"("B");

-- CreateIndex
CREATE INDEX "_PostLikes_B_index" ON "public"."_PostLikes"("B");

-- CreateIndex
CREATE INDEX "_EventParticipants_B_index" ON "public"."_EventParticipants"("B");

-- AddForeignKey
ALTER TABLE "public"."SkillTree" ADD CONSTRAINT "SkillTree_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SkillNode" ADD CONSTRAINT "SkillNode_skillTreeId_fkey" FOREIGN KEY ("skillTreeId") REFERENCES "public"."SkillTree"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SkillNode" ADD CONSTRAINT "SkillNode_parentNodeId_fkey" FOREIGN KEY ("parentNodeId") REFERENCES "public"."SkillNode"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Post" ADD CONSTRAINT "Post_skillNodeId_fkey" FOREIGN KEY ("skillNodeId") REFERENCES "public"."SkillNode"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SkillTreeUser" ADD CONSTRAINT "SkillTreeUser_skillTreeId_fkey" FOREIGN KEY ("skillTreeId") REFERENCES "public"."SkillTree"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SkillTreeUser" ADD CONSTRAINT "SkillTreeUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SkillNodeUser" ADD CONSTRAINT "SkillNodeUser_skillNodeId_fkey" FOREIGN KEY ("skillNodeId") REFERENCES "public"."SkillNode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SkillNodeUser" ADD CONSTRAINT "SkillNodeUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Feedback" ADD CONSTRAINT "Feedback_verifierId_fkey" FOREIGN KEY ("verifierId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Feedback" ADD CONSTRAINT "Feedback_postId_fkey" FOREIGN KEY ("postId") REFERENCES "public"."Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Event" ADD CONSTRAINT "Event_winnerId_fkey" FOREIGN KEY ("winnerId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_SkillTreeTags" ADD CONSTRAINT "_SkillTreeTags_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."SkillTree"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_SkillTreeTags" ADD CONSTRAINT "_SkillTreeTags_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_PostLikes" ADD CONSTRAINT "_PostLikes_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_PostLikes" ADD CONSTRAINT "_PostLikes_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_EventParticipants" ADD CONSTRAINT "_EventParticipants_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_EventParticipants" ADD CONSTRAINT "_EventParticipants_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
