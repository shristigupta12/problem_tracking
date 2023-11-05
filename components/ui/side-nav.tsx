import {Menu} from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ContestMockData } from '@/mocks/contest-mock-data'
import { DataTable } from './contest-table/data-table'
import { columns } from './contest-table/columns'


const SideNav: React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = () =>{
    return(
        <Sheet>
            <SheetTrigger><Menu className='text-neutral-600 dark:text-neutral-400'/></SheetTrigger>
            <SheetContent className='w-[750px] dark:bg-neutral-900 dark:border-l-neutral-700'>
                <SheetHeader>
                <SheetTitle className='text-neutral-400 mx-auto mb-3 dark:text-neutral-400'>Contests</SheetTitle>
                <SheetDescription>
                    {ContestMockData.map((data, index)=>{
                        return(
                            <div className='flex flex-col gap-1 mb-3' key={index}>
                                <h2 className='text-md text-orange-500 font-semibold'>{data.platformName}</h2>
                                <DataTable columns={columns} data={data.contests} />
                            </div>
                        )
                    })}
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export {SideNav};