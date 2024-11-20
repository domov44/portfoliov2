import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listSkillTypes } from '@/graphql/queries';

const typeClient = generateClient();

function useTypesOptions() {
  const [typesOptions, setTypesOptions] = useState([]);

  useEffect(() => {
    fetchTypes();
  }, []);

  async function fetchTypes() {
    try {
      const typeData = await typeClient.graphql({
        query: listSkillTypes,
        variables: {
          limit: 100
        },
      });
      setTypesOptions(typeData.data.listSkillTypes.items);
    } catch (error) {
      console.error('Erreur lors de la récupération des types:', error);
    }
  }

  return typesOptions;
}

export default useTypesOptions;