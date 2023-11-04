import { ColumnDef } from "@tanstack/react-table"

type contests = {
    contestName: string,
    startTime: string,
    duration: number
}
export const columns : ColumnDef<contests>[] = [
    {
        accessorKey: "contestName",
        header: "Name"
    },
    {
        accessorKey: "startTime",
        header: "Start time"
    },
    {
        accessorKey: "duration",
        header: "Duration"
    }
]