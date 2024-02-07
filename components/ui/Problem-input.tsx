import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { useState } from 'react'


interface Problem {
  key: number;
  name: string;
  link: string;
  priority: string;
}

interface toastFunction {
  (problemData: Problem[]): void;
}

interface ProblemInputProps {
  problemData: Problem[];
  setProblemData: React.Dispatch<React.SetStateAction<Problem[]>>; // Updated type
}

const ProblemInput: React.FunctionComponent<ProblemInputProps> = ({ problemData, setProblemData }) => {
  const { toast } = useToast();

  const [nameValue, setNameValue] = useState("");
  const [linkValue, setLinkValue] = useState("");
  const [priorityValue, setPriorityValue] = useState("");

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNameValue(e.target.value);
  }
  function handleLinkChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLinkValue(e.target.value);
  }
  function handlePriorityChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPriorityValue(e.target.value);
  }

  function handleAdd() {
    if (nameValue === "" || linkValue === "" || priorityValue === "") {
      toast({
        title: "No Problem added",
        description: "Complete the problem details",
      });
    } else {
      const currentDate: Date = new Date();
      const formattedDate: string = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

      setProblemData((prevData) => [
        ...prevData,
        { key: prevData.length + 1, name: nameValue, link: linkValue, priority: priorityValue },
      ]);
      toast({
        title: "Problem added",
        description: formattedDate,
      });
    }
  }

  return (
    
    <section className='flex flex-col gap-3 w-full p-6 border rounded shadow-md  shadow-neutral-200 bg-white dark:border-neutral-700 dark:shadow-neutral-700 dark:bg-neutral-800 '>
      <div className='flex flex-col gap-1'>
        <label htmlFor="name" className='text-neutral-700 dark:text-neutral-50'>
          Problem Names
        </label>
        <Input
          className='shadow-neutral-100 shadow-sm text-neutral-600 dark:shadow-neutral-700 dark:border-neutral-700 dark:text-neutral-300'
          value={nameValue}
          onChange={handleNameChange}
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="name" className='text-neutral-700 dark:text-neutral-50'>
          Problem Link
        </label>
        <Input
          className='shadow-neutral-100 shadow-sm text-neutral-600 dark:shadow-neutral-700 dark:border-neutral-700 dark:text-neutral-300'
          value={linkValue}
          onChange={handleLinkChange}
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="name" className='text-neutral-700 dark:text-neutral-50'>
          Priority
        </label>
        <Input
          className='shadow-neutral-100 shadow-sm text-neutral-600 dark:shadow-neutral-700 dark:border-neutral-700 dark:text-neutral-300'
          value={priorityValue}
          onChange={handlePriorityChange}
        />
      </div>
      <div>
        <Button
          className=' bg-orange-500 hover:bg-orange-400 shadow-neutral-200 shadow-sm dark:bg-orange-500 dark:hover:bg-orange-600 dark:text-white dark:shadow-neutral-700'
          onClick={() => handleAdd()}
        >
          Add problem
        </Button>
      </div>
    </section>
  );
};

export { ProblemInput };

