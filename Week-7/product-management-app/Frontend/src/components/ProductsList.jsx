import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const gotoProducts = (product) => {
    navigate('/product', { state: { product } });
  };

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (res.status === 200) {
          const productsData = await res.json();
          setProducts(productsData);
        } else {
          throw new Error('Failed to fetch');
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-lg sm:text-xl md:text-2xl text-cyan-500 mt-10">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-lg sm:text-xl md:text-2xl text-red-500 mt-10 px-4">
        {error.message}
      </p>
    );
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100 py-8 sm:py-10 md:py-12 rounded-2xl">
    
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl p-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-800 mb-6">
            Our Products
          </h1>

          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-96 px-5 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-xl sm:text-2xl text-red-500 mt-10">
          No Results Found
        </p>
      ) : (
        <div className="max-w-7xl mx-auto mt-10 sm:mt-12 px-4 sm:px-6 lg:px-10 ">
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                onClick={() => gotoProducts(product)}
                key={product.id}
                className="bg-white  shadow hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer border border-slate-200"
              >
                <div className="bg-slate-50 p-6 flex justify-center items-center h-56">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-28 h-28 object-contain"
                  />
                </div>

                <div className="p-5 text-center">
                  <h2 className="text-sm sm:text-base font-semibold text-slate-800 line-clamp-2">
                    {product.title}
                  </h2>

                  <p className="text-slate-500 capitalize text-sm mt-2">
                    {product.category}
                  </p>

                  <p className="text-cyan-600 font-bold text-xl sm:text-2xl mt-3">
                    ${product.price}
                  </p>

                  <button className="mt-4 w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition">
                    View Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsList;