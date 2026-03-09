/* eslint-disable no-unused-vars */
import { useEffect, useState,useRef } from "react";
import { useNavigate } from "react-router";

export default function ProductList() {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  let [search, setSearch] = useState("")
  const navigate = useNavigate();

  const searchInputRef = useRef(null);


  const searchProducts = (searchValue) => {
    console.log("searching products")
    setSearch(searchValue)
  }
  useEffect(() => {
    console.log("search product",search)
    console.log(products)
    let filteredProducts = products.filter((productObj) => {
        // console.log(productObj.title)
        console.log("search")

        return productObj.title.toLowerCase().includes(search.toLowerCase())

    })
    console.log(filteredProducts)
  },[search, products])

    useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const goToProduct = (productObj) => {
    navigate("/product", { state: { product: productObj } });
  };

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        console.log("fetching data");
        let res = await fetch("https://fakestoreapi.com/products");
        console.log("fetch completed");
        if (res.status === 200) {
          let productsData = await res.json();
          setLoading(false);
          setProducts(productsData);
        } else {
          console.log("error occured");
        }
      } catch (err) {
        setError(err);
      }
    }
    getProducts();
  }, []);

  if (loading === true)
    return <p className="text-red-600 text-center"> Loading..</p>;
  if (error != null) return <p className="text-red-600">{error.message}</p>;
  return (
    <>

      <input onChange={(ele) => setSearch(ele.target.value)} className= "bg-white ml-100 mt-4 border rounded-2xl m-3 pl-2 pr-3" type="texh" ref={searchInputRef} placeholder="Search" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3  ">
        {products.map((productObj) => (
          <div
            onClick={() => goToProduct(productObj)}
            key={productObj.key}
            className="bg-amber-300 m-3 rounded-2xl border-blue-600 cursor-pointer"
          >
            <img
              width="200px"
              className="text-center"
              src={productObj.image}
              alt=""
            />
            <p key={productObj.id}>{productObj.title}</p>
            <p>{productObj.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}
