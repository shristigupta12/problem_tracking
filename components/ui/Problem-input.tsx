
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

const ProblemInput: React.FunctionComponent = ()=>{
    const { toast } = useToast();
    return(
        <section className='flex flex-col gap-3 w-full p-6 border rounded shadow-md  shadow-neutral-200 bg-white dark:border-neutral-700 dark:shadow-neutral-700 dark:bg-neutral-800 '>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name" className='text-neutral-700 dark:text-neutral-50'>Problem Name</label>
            <Input className='  shadow-neutral-100 shadow-sm text-neutral-600 dark:shadow-neutral-700 dark:border-neutral-700 dark:text-neutral-300'/>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name" className='text-neutral-700 dark:text-neutral-50'>Problem Link</label>
            <Input className='shadow-neutral-100 shadow-sm text-neutral-600 dark:shadow-neutral-700 dark:border-neutral-700 dark:text-neutral-300'/>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name" className='text-neutral-700 dark:text-neutral-50'>Priority</label>
            <Input className='shadow-neutral-100 shadow-sm text-neutral-600 dark:shadow-neutral-700 dark:border-neutral-700 dark:text-neutral-300'/>
          </div>
          <div>
            <Button className=' bg-orange-500 hover:bg-orange-400 shadow-neutral-200 shadow-sm dark:bg-orange-500 dark:hover:bg-orange-600 dark:text-white dark:shadow-neutral-700'
            onClick={()=>{
              toast({
                title: "Problem added",
                description: "Saturday, November 4, 2023",
              })
            }}
            >Add problem</Button>
          </div>
        </section>
    )
}
export {ProblemInput};
