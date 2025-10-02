import { useState, useEffect } from 'react';
import axios from '../../../api/axios';
import { Card } from '../CardProduct/Card';
import { Stack, Select } from '@chakra-ui/react';

export const AllProducts = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    axios.get('allProducts').then((data) => setData(data.data));
  }, []);
  useEffect(() => {
    axios
      .get(`allProducts/category/${category}`)
      .then((data) => setData(data.data));
  }, [category]);

  return (
    <>
      <section
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        className=" bg-gray-100"
      >
        <Stack>
          <Select placeholder="Categoria" padding={4} name="" id="">
            <option value="short">Short</option>
            <option value="phone">phone</option>
            <option value="videogame">videogames</option>
            <option value="shoes">shoes</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
          </Select>
        </Stack>

        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header opcional */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nuestros Productos
              </h2>
              <p className="text-lg text-gray-600">
                Descubre nuestra selección premium
              </p>
            </div>

            {/* Grid responsivo con mejor espaciado */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
              {data.map(({ name, price, image, _id, quantity }) => {
                return (
                  <div
                    key={_id}
                    className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <Card
                      data={{ name, price, image, quantity, _id }}
                      id={_id}
                      name={name}
                      price={price}
                      image={image}
                    />
                  </div>
                );
              })}
            </div>

            {/* Mensaje cuando no hay datos */}
            {data.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2M4 13h2m13-8l-8 8-4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No hay productos disponibles
                </h3>
                <p className="text-gray-500">
                  Los productos aparecerán aquí cuando estén disponibles.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
