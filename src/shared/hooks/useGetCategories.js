import { useState, useEffect, useCallback } from 'react';
import { useToast } from './useToast';
import categoryApi from 'api/category';

const useGetCategories = () => {
  const { toast } = useToast();
  const [categories, setCategories] = useState([]);
  const getCategories = useCallback(async () => {
    try {
      const response = await categoryApi.getAll();
      setCategories(response.data.items);
    } catch (error) {
      toast.error(error);
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    getCategories();
    //eslint-disable-next-line
  }, [getCategories]);

  return { categories };
};

export default useGetCategories;
