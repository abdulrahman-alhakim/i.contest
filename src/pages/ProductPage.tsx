import { Card } from "../components/Card"

const ServicePage= () =>{
    return(
        <section id="product">
            <Card theme={""} setTheme={function (theme: string): void {
                throw new Error("Function not implemented.")
            } } />
        </section>
    )
}

export default ServicePage;