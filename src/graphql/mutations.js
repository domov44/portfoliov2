/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
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
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
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
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
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
export const createSkillType = /* GraphQL */ `
  mutation CreateSkillType(
    $input: CreateSkillTypeInput!
    $condition: ModelSkillTypeConditionInput
  ) {
    createSkillType(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSkillType = /* GraphQL */ `
  mutation UpdateSkillType(
    $input: UpdateSkillTypeInput!
    $condition: ModelSkillTypeConditionInput
  ) {
    updateSkillType(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSkillType = /* GraphQL */ `
  mutation DeleteSkillType(
    $input: DeleteSkillTypeInput!
    $condition: ModelSkillTypeConditionInput
  ) {
    deleteSkillType(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createTrip = /* GraphQL */ `
  mutation CreateTrip(
    $input: CreateTripInput!
    $condition: ModelTripConditionInput
  ) {
    createTrip(input: $input, condition: $condition) {
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
export const updateTrip = /* GraphQL */ `
  mutation UpdateTrip(
    $input: UpdateTripInput!
    $condition: ModelTripConditionInput
  ) {
    updateTrip(input: $input, condition: $condition) {
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
export const deleteTrip = /* GraphQL */ `
  mutation DeleteTrip(
    $input: DeleteTripInput!
    $condition: ModelTripConditionInput
  ) {
    deleteTrip(input: $input, condition: $condition) {
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
