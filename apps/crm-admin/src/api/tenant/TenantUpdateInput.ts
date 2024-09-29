import { UserUpdateManyWithoutTenantsInput } from "./UserUpdateManyWithoutTenantsInput";

export type TenantUpdateInput = {
  description?: string | null;
  isActive?: boolean;
  name?: string | null;
  normalizedName?: string | null;
  note?: string | null;
  users?: UserUpdateManyWithoutTenantsInput;
};
