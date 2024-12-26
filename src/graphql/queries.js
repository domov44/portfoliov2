/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
      featuredOrder
      globalPartitionKey
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
      }
      nextToken
      __typename
    }
  }
`;
export const ProjectsByFeaturedOrder = /* GraphQL */ `
  query ProjectsByFeaturedOrder(
    $featuredOrder: Int!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ProjectsByFeaturedOrder(
      featuredOrder: $featuredOrder
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
      }
      nextToken
      __typename
    }
  }
`;
export const allProjectsByDate = /* GraphQL */ `
  query AllProjectsByDate(
    $globalPartitionKey: String!
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    allProjectsByDate(
      globalPartitionKey: $globalPartitionKey
      date: $date
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
      project {
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
export const getGallery = /* GraphQL */ `
  query GetGallery($id: ID!) {
    getGallery(id: $id) {
      id
      place
      date
      picture
      fullPicture
      homeBackground
      onHome
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listGalleries = /* GraphQL */ `
  query ListGalleries(
    $filter: ModelGalleryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGalleries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        place
        date
        picture
        fullPicture
        homeBackground
        onHome
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBento = /* GraphQL */ `
  query GetBento($id: ID!) {
    getBento(id: $id) {
      id
      file
      href
      label
      featuredOrder
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBentos = /* GraphQL */ `
  query ListBentos(
    $filter: ModelBentoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBentos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        file
        href
        label
        featuredOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const BentoByFeaturedOrder = /* GraphQL */ `
  query BentoByFeaturedOrder(
    $featuredOrder: Int!
    $sortDirection: ModelSortDirection
    $filter: ModelBentoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BentoByFeaturedOrder(
      featuredOrder: $featuredOrder
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        file
        href
        label
        featuredOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProjectSkills = /* GraphQL */ `
  query GetProjectSkills($id: ID!) {
    getProjectSkills(id: $id) {
      id
      projectId
      skillId
      project {
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
      }
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProjectSkills = /* GraphQL */ `
  query ListProjectSkills(
    $filter: ModelProjectSkillsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectId
        skillId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const projectSkillsByProjectId = /* GraphQL */ `
  query ProjectSkillsByProjectId(
    $projectId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectSkillsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectSkillsByProjectId(
      projectId: $projectId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectId
        skillId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const projectSkillsBySkillId = /* GraphQL */ `
  query ProjectSkillsBySkillId(
    $skillId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectSkillsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectSkillsBySkillId(
      skillId: $skillId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectId
        skillId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
