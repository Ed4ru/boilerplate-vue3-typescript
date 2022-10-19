import { AnyObject, AnyClass } from "@/types/global";
import { typeConvertor } from "@/utils/dataManipulation";

export interface IGlobal {
  id?: number | null;
  createdAt?: Date | string | null;
}

export class Global {
  id?: number | null;
  createdAt?: Date | null;

  constructor(data?: IGlobal) {
    this.id = data?.id;
    this.createdAt = typeConvertor(Date, data?.createdAt);
  }

  update(data: IGlobal) {
    this.convertAndUpdate(data, "id");
    this.convertAndUpdate(data, "createdAt", Date);
  }

  convertAndUpdate(
    data: AnyObject,
    key: string,
    type: AnyClass | null = null,
    fallback: any = null
  ) {
    if (data[key] === undefined) return;
    if (data[key] === null && fallback !== undefined)
      return Object.assign(this, { [key]: fallback });
    if (type)
      return Object.assign(this, { [key]: typeConvertor(type, data[key]) });
    Object.assign(this, { [key]: data[key] });
  }
}
