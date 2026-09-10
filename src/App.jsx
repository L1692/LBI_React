import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoApp from './components/TodoApp'

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
      price: 53.99,
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="p-8 bg-red-100 min-h-screen">
      <Header />
      <TodoApp />
      <Footer />
    </div>
  )
}

export default App
