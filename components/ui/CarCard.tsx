import {
  Card,
  CardContent,
  
} from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function CarCards({data}: any) {
  return (
    
       <Card key={data.id} className='w-[350px]'>
              <Link href={`/explore/${data.id}`}>
                <CardContent  className="grid gap-4">
                  {/* image will go here */}
                  <Separator/>
                  <Badge className='w-16' variant='outline'>
                     {data.year}
                  </Badge>
                  <p>
                     {data.car_name}
                  </p>
                  <Badge className='w-16'>
                     {data.transmission}
                  </Badge>
                  <Separator/>
                  <p>
                     {data.price}
                  </p>
               </CardContent>
              </Link>
               
            </Card>

    
  )
}