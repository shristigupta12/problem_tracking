"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Problem = {
    key:number
  name: string
  link: string
  priority: string
}

export const columns : ColumnDef<Problem>[] = [
    {
        accessorKey: "priority",
        header: "Priority"
    },
    {
        accessorKey: "name",
        header: "Problem name"
    },
    {
        accessorKey: "link",
        header: "Problem Link"
    }
]