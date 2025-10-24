import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { format } from 'date-fns'
import { Badge } from '../ui/badge'
import { TEvent } from '@/types'
import { Clock10, Clock12 } from 'lucide-react'

const EventCard = ({
  ev
}: {
  ev: TEvent
}) => {
  return (
    <Card className="w-full rounded">
      <CardHeader>
        <CardTitle className="flex flex-col items-start justify-between">
          <h4 className='text-2xl'>{ev.title}</h4>

          <div className='!text-sm text-muted-foreground flex flex-col items-start justify-start'>
            <div className='flex items-center justify-start gap-2'>
              <Clock10 size={16} /> {format(new Date(ev.startDate), "PPP")}
            </div>
            <div className='flex items-center justify-start gap-2'>
              <Clock12 size={16} /> {format(new Date(ev.endDate), "PPP")}
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <CardDescription>{ev.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Badge>
          {ev.mode}{" "}
          {ev.mode === "RANKED" ? `- ${ev.xpPayout} XP` : ""}
        </Badge>
      </CardFooter>
    </Card>
  )
}

export default EventCard
