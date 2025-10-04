import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../../../api/axios';

const UsePreview = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await instance.get(`products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Error fetching product');
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]);
  return { product, isLoading, error };
};

export default UsePreview;
