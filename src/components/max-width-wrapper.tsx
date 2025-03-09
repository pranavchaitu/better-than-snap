import { ReactNode } from "react"

export function MaxWidthWrapper({ children } : {
    children : ReactNode
}) {
    return <>
        <div className="flex justify-center">
            <div className="w-screen max-w-screen-md m-2 lg:m-0 lg:mt-2">
                {children}
            </div>
        </div>
    </>
}