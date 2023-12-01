import { Card } from "../components/Card"

const ServicePage= () =>{
    return(
        <div>
            <Card theme={""} setTheme={function (theme: string): void {
                throw new Error("Function not implemented.")
            } } />
        </div>
    )
}

export default ServicePage;