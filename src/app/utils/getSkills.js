import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listSkills } from '@/graphqlCustom/queries';

const skillClient = generateClient();

function useSkillsOptions() {
  const [skillsOptions, setSkillsOptions] = useState([]);

  useEffect(() => {
    fetchSkills();
  }, []);

  async function fetchSkills() {
    try {
      const skillsData = await skillClient.graphql({
        query: listSkills,
        variables: {
          limit: 100
        },
      });
      setSkillsOptions(skillsData.data.listSkills.items);
    } catch (error) {
      console.error('Erreur lors de la récupération des skills:', error);
    }
  }

  return skillsOptions;
}

export default useSkillsOptions;