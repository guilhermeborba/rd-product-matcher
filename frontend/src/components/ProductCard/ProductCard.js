import React from 'react';

function ProductCard({ product }) {
  if (!product) {
    return null;
  }

  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4 shadow-sm bg-white">
      <h3 className="text-xl font-bold text-blue-600">{product.name}</h3>
      <p className="text-sm text-gray-500 bg-gray-100 inline-block px-2 py-1 rounded-full my-2">{product.category}</p>
      <div>
        <h4 className="font-semibold mt-3">Funcionalidades Principais:</h4>
        <ul className="list-disc list-inside text-gray-700">
          {product.features.slice(0, 3).map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductCard;
