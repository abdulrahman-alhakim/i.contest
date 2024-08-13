import React from 'react';
import Products from "../components/products/Products";

interface ProductsPageProps {
    theme: string;
    setTheme: (theme: string) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ theme, setTheme }) => {
    return (
        <section id="product" className="py-4 px-3">
            <Products />
        </section>
    );
}

export default ProductsPage;
