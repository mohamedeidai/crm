import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type TenantWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  name?: StringNullableFilter;
  normalizedName?: StringNullableFilter;
  note?: StringNullableFilter;
  users?: UserListRelationFilter;
};
