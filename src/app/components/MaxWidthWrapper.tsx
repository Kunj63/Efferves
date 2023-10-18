import { ReactNode } from "react"

const Maxwidthwrapper = ({

    className,
    children
    
    }: {
        className?: string
        children: ReactNode
    }) => {
        return(
            <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
                {children}
            </div>
        )
    }

export default Maxwidthwrapper