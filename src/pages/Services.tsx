import { Card } from "../components/Card"

export const Services= () =>{
    return(
        <div>
            <Card theme={""} setTheme={function (theme: string): void {
                throw new Error("Function not implemented.")
            } } />
        </div>
    )
}