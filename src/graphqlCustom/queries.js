export const listSkills = /* GraphQL */ `
  query ListSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        logo
        colisionLogo
        typeID
        type {
            id
            name
            createdAt
            updatedAt
            __typename
        }
        createdAt
        updatedAt
        projectSkillsId
        skillTypeId
        __typename
      }
      nextToken
      __typename
    }
  }
`;