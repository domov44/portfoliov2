import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listCategories } from '@/graphql/queries';

const categoryClient = generateClient();

function useCategoriesOptions() {
  const [categoriesOptions, setCategoriesOptions] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      const categoriesData = await categoryClient.graphql({
        query: listCategories,
        variables: {
          limit: 100
        },
      });
      setCategoriesOptions(categoriesData.data.listCategories.items);
    } catch (error) {
      console.error('Erreur lors de la récupération des types:', error);
    }
  }

  return categoriesOptions;
}

export default useCategoriesOptions;