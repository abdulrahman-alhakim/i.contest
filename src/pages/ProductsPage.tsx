import { Card } from "react-bootstrap";
import Products from "../components/products/Products";

interface ProductsPageProps {
    theme: string;
    setTheme: (theme: string) => void;
  }

const ProductsPage: React.FC<ProductsPageProps> = ({ theme, setTheme }) =>{
    return(
        <section id="product">
            <Products/>
        </section>
    )
}

export default ProductsPage;