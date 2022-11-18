
import { useState } from "react";
import { useDispatch } from "react-redux";
import AddProducts from "../AddProduct/AddProducts";
// import { fetchProducts } from "../Redux/Products";

const DEFAULT_PRODUCTS_FORM = {
  produtName: "",
  description: "",
  price: 0,
  discountPrice: 0,
};
const Products = () => {
  const [formProducts, setformProducts] = useState(DEFAULT_PRODUCTS_FORM);
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const addProducts = products => {
    setProducts((prev) => ([products, ...prev]));
    setformProducts(DEFAULT_PRODUCTS_FORM);
  };

  return (
    <div>
      <AddProducts
        formProducts={formProducts}
        addProducts={addProducts}
        products={products}
        setformProducts= {setformProducts}
      />
    </div>
  );
};

export default Products;
