import React from 'react';
import { useLocation, useNavigate } from 'react-router';

function Product() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const product = state?.product;

  if (!product) {
    return (
      <p className="text-center text-lg sm:text-xl md:text-2xl mt-20 text-red-500 px-4">
        No product data available
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center bg-slate-50 rounded-xl p-6">
            <img
              src={product.image}
              alt={product.title}
              className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 object-contain hover:scale-105 transition duration-300"
            />
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
              {product.title}
            </h1>

            <span className="inline-block bg-cyan-100 text-cyan-700 px-4 py-1 rounded-full text-xs sm:text-sm capitalize">
              {product.category}
            </span>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {product.description}
            </p>

            <p className="text-3xl sm:text-4xl font-bold text-cyan-600">
              ${product.price}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
              <button
                onClick={() => navigate(-1)}
                className="w-full sm:w-auto px-6 py-3 bg-slate-300 rounded-lg hover:bg-slate-400 transition"
              >
                Back
              </button>

              <button className="w-full sm:w-auto px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition">
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Product;