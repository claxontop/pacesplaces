/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePlaceInput = {
  id?: string | null,
  description: string,
  imgUrl: string,
  title: string,
};

export type ModelPlaceConditionInput = {
  description?: ModelStringInput | null,
  imgUrl?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelPlaceConditionInput | null > | null,
  or?: Array< ModelPlaceConditionInput | null > | null,
  not?: ModelPlaceConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdatePlaceInput = {
  id: string,
  description?: string | null,
  imgUrl?: string | null,
  title?: string | null,
};

export type DeletePlaceInput = {
  id?: string | null,
};

export type ModelPlaceFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  imgUrl?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelPlaceFilterInput | null > | null,
  or?: Array< ModelPlaceFilterInput | null > | null,
  not?: ModelPlaceFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreatePlaceMutationVariables = {
  input: CreatePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type CreatePlaceMutation = {
  createPlace:  {
    __typename: "Place",
    id: string,
    description: string,
    imgUrl: string,
    title: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlaceMutationVariables = {
  input: UpdatePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type UpdatePlaceMutation = {
  updatePlace:  {
    __typename: "Place",
    id: string,
    description: string,
    imgUrl: string,
    title: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlaceMutationVariables = {
  input: DeletePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type DeletePlaceMutation = {
  deletePlace:  {
    __typename: "Place",
    id: string,
    description: string,
    imgUrl: string,
    title: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPlaceQueryVariables = {
  id: string,
};

export type GetPlaceQuery = {
  getPlace:  {
    __typename: "Place",
    id: string,
    description: string,
    imgUrl: string,
    title: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlacesQueryVariables = {
  filter?: ModelPlaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlacesQuery = {
  listPlaces:  {
    __typename: "ModelPlaceConnection",
    items:  Array< {
      __typename: "Place",
      id: string,
      description: string,
      imgUrl: string,
      title: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePlaceSubscription = {
  onCreatePlace:  {
    __typename: "Place",
    id: string,
    description: string,
    imgUrl: string,
    title: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlaceSubscription = {
  onUpdatePlace:  {
    __typename: "Place",
    id: string,
    description: string,
    imgUrl: string,
    title: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlaceSubscription = {
  onDeletePlace:  {
    __typename: "Place",
    id: string,
    description: string,
    imgUrl: string,
    title: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
