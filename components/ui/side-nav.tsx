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
import { useState, useEffect } from 'react'


interface Contest {
    key: number;
    contestName: string;
    startTime: string;
    duration: number;
  }
const SideNav: React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = () =>{

    const [contests, setContests] = useState<Contest[]>([]);
    
    useEffect(() => {
        const fetchContests = async () => {
        try {
            const response = await fetch('https://codeforces.com/api/contest.list');
            const data = await response.json();
    
            // Filter contests where phase is "BEFORE"
            const beforeContests = data.result.filter(
            (contest: any) => contest.phase === 'BEFORE'
            );
    
            // Take the first 3 contests
            const firstThreeContests = beforeContests.slice(0, 3);
    
            const formattedContests: Contest[] = firstThreeContests.map(
                (contest: any, index: number) => {
                  const currentTime = new Date().getTime() / 1000;
                  const timeLeftSeconds = contest.startTimeSeconds - currentTime;
                  const days = Math.floor(timeLeftSeconds / (3600 * 24));
                  const hours = Math.floor((timeLeftSeconds % (3600 * 24)) / 3600);
                  const minutes = Math.floor((timeLeftSeconds % 3600) / 60);
      
                  return {
                    key: index + 1,
                    contestName: contest.name,
                    startTime: `${days}d ${hours}h ${minutes}m`,
                    duration: contest.durationSeconds / 60, // Convert seconds to minutes
                  };
                }
              );
      
              setContests(formattedContests);
            } catch (error) {
              console.error('Error fetching contests:', error);
            }
          };
      
          fetchContests();
        }, []);

    return(
      
        <Sheet>
            <SheetTrigger><Menu className='text-neutral-600 dark:text-neutral-400'/></SheetTrigger>
            <SheetContent className='w-[1000px] dark:bg-neutral-900 dark:border-l-neutral-700'>
                <SheetHeader>
                <SheetTitle className='text-neutral-400 mx-auto mb-3 dark:text-neutral-00'>Contests</SheetTitle>
                <SheetDescription>
                    {Array(1).fill("").map((data, index)=>{
                        return(
                            <div className='flex flex-col gap-1 mb-3' key={index}>
                                <h2 className='text-md text-orange-500 font-semibold'>CodeForces</h2>
                                <DataTable columns={columns} data={contests} />
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