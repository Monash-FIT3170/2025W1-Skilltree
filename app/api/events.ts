import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      name,
      rankedStatus,
      experiencePayout,
      communityId,
      userId,
      experienceId,
    } = req.body

    try {
      const event = await prisma.event.create({
        data: {
          name,
          rankedStatus,
          experiencePayout,
          community: { connect: { id: communityId } },
          user: { connect: { id: userId } },
          experience: { connect: { id: experienceId } },
        },
      })
      return res.status(201).json(event)
    } catch (error) {
      console.error('Create Event Error:', error)
      return res.status(500).json({ error: 'Failed to create event' })
    }
  }

  if (req.method === 'GET') {
    try {
      const events = await prisma.event.findMany({
        include: {
          community: true,
          user: true,
          experience: true,
        },
      })
      return res.status(200).json(events)
    } catch (error) {
      console.error('Fetch Events Error:', error)
      return res.status(500).json({ error: 'Failed to fetch events' })
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' })
}
