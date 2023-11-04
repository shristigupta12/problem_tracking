"use client"
import { PageContainer } from '@/components/layouts/page-container'
import { ViewContainer } from '@/components/layouts/view-container'
import { columns } from "@/components/ui/problem-table/columns"
import { DataTable } from '@/components/ui/problem-table/data-table'
import { tableData } from '@/mocks/mock-table-data'
import { ProblemInput } from '@/components/ui/Problem-input'


export default function Home() {
  
  return (
    <PageContainer className='flex flex-col gap-11'>
      <ViewContainer className="flex items-center justify-center ">
        <ProblemInput />
      </ViewContainer>

      <ViewContainer className="flex items-center justify-center w-[1250px]">
        <DataTable columns={columns} data={tableData} className=" w-full border rounded shadow-md shadow-neutral-200 bg-white" />
      </ViewContainer>

    </PageContainer>
  )
}
