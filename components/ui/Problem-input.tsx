
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

const ProblemInput: React.FunctionComponent = ()=>{
    const { toast } = useToast();
    return(
        <section className='flex flex-col gap-3 w-full p-6 border rounded shadow-neutral-200 shadow-md bg-white '>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name" className='text-neutral-700'>Project Name</label>
            <Input className='  shadow-neutral-100 shadow-md '/>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name" className='text-neutral-700'>Project Link</label>
            <Input className='shadow-neutral-100 shadow-md'/>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name" className='text-neutral-700'>Priority</label>
            <Input className='shadow-neutral-100 shadow-md'/>
          </div>
          <div>
            <Button className=' bg-orange-500 hover:bg-orange-400 shadow-neutral-200 shadow-md'
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
