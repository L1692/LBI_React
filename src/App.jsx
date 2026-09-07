import { useState } from 'react'
import './App.css'

function App() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 5.99,
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-6 items-center justify-center min-h-screen bg-gray-100">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded shadow-md w-64">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
          <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  )
}

export default App
