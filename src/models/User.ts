import { Global } from '@/models/Global';
import type { IGlobal } from '@/models/Global';
import { AnyObject } from '@/types/global';

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
    this.firstname = data?.firstname ?? 'John';
    this.lastname = data?.lastname ?? 'Doe';
    this.email = data?.email ?? null;
  }

  update(data: AnyObject<IGlobal>) {
    super.update(data);
    this.convertAndUpdate(data, 'firstname');
    this.convertAndUpdate(data, 'lastname');
    this.convertAndUpdate(data, 'email');
  }

  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}
