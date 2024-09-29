import { InputJsonValue } from "../../types";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  tenant?: TenantWhereUniqueInput | null;
  username?: string;
};
