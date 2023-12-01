"use client"
import { PageContainer } from '@/components/layouts/page-container'
import { ViewContainer } from '@/components/layouts/view-container'
import { columns } from "@/components/ui/problem-table/columns"
import { DataTable } from '@/components/ui/problem-table/data-table'
import { tableData } from '@/mocks/mock-table-data'
import { ProblemInput } from '@/components/ui/Problem-input'
import { useState } from 'react'

interface Problem{
  key:number
  name: string
  link: string
  priority: string
}

export default function Home() {
  
  const [problemData, setProblemData] = useState<Problem[]>([]);
    
  return (
      <PageContainer className='flex flex-col gap-11'>
        <ViewContainer className="flex items-center justify-center ">
          <ProblemInput problemData={problemData} setProblemData={setProblemData} />
        </ViewContainer>
        <ViewContainer className="flex items-center justify-center w-[1250px]">
          <DataTable columns={columns} data={problemData} className=" w-full border rounded shadow-md shadow-neutral-200 dark:shadow-neutral-700 dark:border-neutral-600 bg-white" />
        </ViewContainer>
      </PageContainer>
  )
}
