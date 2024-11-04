/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
      id
      name
      slug
      images
      thumbnail
      video
      top4
      href
      github
      role
      context
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
      id
      name
      slug
      images
      thumbnail
      video
      top4
      href
      github
      role
      context
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
      id
      name
      slug
      images
      thumbnail
      video
      top4
      href
      github
      role
      context
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
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill($filter: ModelSubscriptionSkillFilterInput) {
    onCreateSkill(filter: $filter) {
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
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill($filter: ModelSubscriptionSkillFilterInput) {
    onUpdateSkill(filter: $filter) {
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
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill($filter: ModelSubscriptionSkillFilterInput) {
    onDeleteSkill(filter: $filter) {
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
export const onCreateSkillType = /* GraphQL */ `
  subscription OnCreateSkillType(
    $filter: ModelSubscriptionSkillTypeFilterInput
  ) {
    onCreateSkillType(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSkillType = /* GraphQL */ `
  subscription OnUpdateSkillType(
    $filter: ModelSubscriptionSkillTypeFilterInput
  ) {
    onUpdateSkillType(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSkillType = /* GraphQL */ `
  subscription OnDeleteSkillType(
    $filter: ModelSubscriptionSkillTypeFilterInput
  ) {
    onDeleteSkillType(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateGallery = /* GraphQL */ `
  subscription OnCreateGallery($filter: ModelSubscriptionGalleryFilterInput) {
    onCreateGallery(filter: $filter) {
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
export const onUpdateGallery = /* GraphQL */ `
  subscription OnUpdateGallery($filter: ModelSubscriptionGalleryFilterInput) {
    onUpdateGallery(filter: $filter) {
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
export const onDeleteGallery = /* GraphQL */ `
  subscription OnDeleteGallery($filter: ModelSubscriptionGalleryFilterInput) {
    onDeleteGallery(filter: $filter) {
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
