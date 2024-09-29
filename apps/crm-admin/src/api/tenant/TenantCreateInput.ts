import { UserCreateNestedManyWithoutTenantsInput } from "./UserCreateNestedManyWithoutTenantsInput";

export type TenantCreateInput = {
  description?: string | null;
  isActive: boolean;
  name?: string | null;
  normalizedName?: string | null;
  note?: string | null;
  users?: UserCreateNestedManyWithoutTenantsInput;
};
