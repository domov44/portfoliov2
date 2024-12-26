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
        skillTypeId
        __typename
      }
      nextToken
      __typename
    }
  }
`;

export const ProjectBySlug = /* GraphQL */ `
  query ProjectBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ProjectBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        slug
        date
        images
        thumbnail
        video
        href
        github
        role
        context
        steps
        description
        featuredOrder
        globalPartitionKey
        createdAt
        updatedAt
        categoryProjectId
        projectCategoryId
        __typename
        skills {
          items{
            id
            skill {
        id
        name
        logo
        colisionLogo
        typeID
        createdAt
        updatedAt
        skillTypeId
        __typename
      }
            __typename
          }
          nextToken
          __typename
      }
      category {
        id
        name
        slug
        createdAt
        updatedAt
        __typename
      }
      }
      nextToken
      __typename
    }
  }
`;