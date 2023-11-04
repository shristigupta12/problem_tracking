import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

const ViewContainer : React.FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({children, className, ...props}) =>{
    return(
        <div className={cn("mx-auto w-[750px]  ", className)} {...props}>
            {children}
        </div>
    )
}

export {ViewContainer}