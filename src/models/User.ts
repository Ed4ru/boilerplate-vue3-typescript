import { Global } from "@/models/Global";
import type { IGlobal } from "@/models/Global";

export interface IUser extends IGlobal {
  firstname?: string | null;
  lastname?: string | null;
  email?: string | null;
}

export class User extends Global {
  firstname: string;
  lastname: string;
  email?: string | null;

  constructor(data?: IUser) {
    super(data);
    this.firstname = data?.firstname ?? "John";
    this.lastname = data?.firstname ?? "Doe";
    this.email = data?.firstname;
  }

  update(data: IUser) {
    super.update(data);
    this.convertAndUpdate(data, "firstname");
    this.convertAndUpdate(data, "lastname");
    this.convertAndUpdate(data, "email");
  }

  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}
