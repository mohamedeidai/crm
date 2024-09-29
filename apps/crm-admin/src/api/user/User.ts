import { JsonValue } from "type-fest";
import { Tenant } from "../tenant/Tenant";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  tenant?: Tenant | null;
  updatedAt: Date;
  username: string;
};
