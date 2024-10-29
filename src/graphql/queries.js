/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      slug
      image
      video
      top4
      href
      github
      steps
      description
      years
      skills {
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
      createdAt
      updatedAt
      categoryProjectId
      projectCategoryId
      __typename
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        slug
        image
        video
        top4
        href
        github
        steps
        description
        years
        createdAt
        updatedAt
        categoryProjectId
        projectCategoryId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ProjectByName = /* GraphQL */ `
  query ProjectByName(
    $name: String!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ProjectByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        slug
        image
        video
        top4
        href
        github
        steps
        description
        years
        createdAt
        updatedAt
        categoryProjectId
        projectCategoryId
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
        image
        video
        top4
        href
        github
        steps
        description
        years
        createdAt
        updatedAt
        categoryProjectId
        projectCategoryId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
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
  }
`;
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
export const SkillByname = /* GraphQL */ `
  query SkillByname(
    $name: String!
    $sortDirection: ModelSortDirection
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    SkillByname(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        logo
        colisionLogo
        typeID
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
export const getSkillType = /* GraphQL */ `
  query GetSkillType($id: ID!) {
    getSkillType(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSkillTypes = /* GraphQL */ `
  query ListSkillTypes(
    $filter: ModelSkillTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkillTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      slug
      project {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        slug
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const CategoryByname = /* GraphQL */ `
  query CategoryByname(
    $name: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    CategoryByname(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        slug
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const CategoryBySlug = /* GraphQL */ `
  query CategoryBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    CategoryBySlug(
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTrip = /* GraphQL */ `
  query GetTrip($id: ID!) {
    getTrip(id: $id) {
      id
      place
      date
      picture
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTrips = /* GraphQL */ `
  query ListTrips(
    $filter: ModelTripFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrips(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        place
        date
        picture
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
