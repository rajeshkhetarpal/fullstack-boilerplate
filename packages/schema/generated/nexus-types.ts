/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as context from "@packages/backend";

declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, "crud">;
    model: NexusPrisma<TypeName, "model">;
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  UserWhereUniqueInput: {
    // input type
    email?: string | null; // String
    id?: number | null; // Int
  };
}

export interface NexusGenEnums {}

export interface NexusGenScalars {
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenRootTypes {
  Mutation: {};
  Query: {};
  Subscription: {};
  User: {
    // root type
    email: string; // String!
    id: number; // Int!
  };
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  UserWhereUniqueInput: NexusGenInputs["UserWhereUniqueInput"];
  String: NexusGenScalars["String"];
  Int: NexusGenScalars["Int"];
  Float: NexusGenScalars["Float"];
  Boolean: NexusGenScalars["Boolean"];
  ID: NexusGenScalars["ID"];
}

export interface NexusGenFieldTypes {
  Mutation: {
    // field return type
    deleteOneUser: NexusGenRootTypes["User"] | null; // User
    ping: string | null; // String
  };
  Query: {
    // field return type
    hello: string | null; // String
    user: NexusGenRootTypes["User"] | null; // User
    users: NexusGenRootTypes["User"][]; // [User!]!
  };
  Subscription: {
    // field return type
    ping: string | null; // String
  };
  User: {
    // field return type
    email: string; // String!
    id: number; // Int!
  };
}

export interface NexusGenArgTypes {
  Mutation: {
    deleteOneUser: {
      // args
      where: NexusGenInputs["UserWhereUniqueInput"]; // UserWhereUniqueInput!
    };
  };
  Query: {
    user: {
      // args
      where: NexusGenInputs["UserWhereUniqueInput"]; // UserWhereUniqueInput!
    };
    users: {
      // args
      after?: NexusGenInputs["UserWhereUniqueInput"] | null; // UserWhereUniqueInput
      before?: NexusGenInputs["UserWhereUniqueInput"] | null; // UserWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    };
  };
}

export interface NexusGenAbstractResolveReturnTypes {}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames =
  | "Mutation"
  | "Query"
  | "Subscription"
  | "User";

export type NexusGenInputNames = "UserWhereUniqueInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes:
    | NexusGenTypes["inputNames"]
    | NexusGenTypes["enumNames"]
    | NexusGenTypes["scalarNames"];
  allOutputTypes:
    | NexusGenTypes["objectNames"]
    | NexusGenTypes["enumNames"]
    | NexusGenTypes["unionNames"]
    | NexusGenTypes["interfaceNames"]
    | NexusGenTypes["scalarNames"];
  allNamedTypes:
    | NexusGenTypes["allInputTypes"]
    | NexusGenTypes["allOutputTypes"];
  abstractTypes: NexusGenTypes["interfaceNames"] | NexusGenTypes["unionNames"];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<
    TypeName extends string,
    FieldName extends string
  > {}
  interface NexusGenPluginSchemaConfig {}
}