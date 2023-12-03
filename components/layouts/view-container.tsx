import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

const ViewContainer : React.FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({children, className, ...props}) =>{
    return(
        <div className={cn("mx-auto w-[900px] max-2xl:w-[800px] max-xl:w-[720px] max-lg:w-[640px] max-md:w-[560px] max-sm:w-[340px] box-border  ", className)} {...props}>
            {children}
        </div>
    )
}

export {ViewContainer}