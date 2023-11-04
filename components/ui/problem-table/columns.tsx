"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Problem = {
    id: string,
    priority: number
    name: string,
    link: string,
    platform: string,
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
    },
    {
        accessorKey: "platform",
        header: "Platform"
    },
]