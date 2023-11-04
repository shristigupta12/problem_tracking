import { cn } from "@/lib/utils"

const PageContainer : React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = ({children, className, ...props}) =>{
    return(
        <div className={cn("my-10", className)} {...props}>
            {children}
        </div>
    )
}

export {PageContainer}