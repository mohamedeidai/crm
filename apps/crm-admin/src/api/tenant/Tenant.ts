import { User } from "../user/User";

export type Tenant = {
  createdAt: Date;
  description: string | null;
  id: string;
  isActive: boolean;
  name: string | null;
  normalizedName: string | null;
  note: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
