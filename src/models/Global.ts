import { ValueOf, AnyObject, AnyClass } from '@/types/global';
import { typeConvertor } from '@/utils/dataManipulation';

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

  update(data: AnyObject<IGlobal>) {
    this.convertAndUpdate(data, 'id');
    this.convertAndUpdate(data, 'createdAt', Date);
  }

  convertAndUpdate<T, Y>(
    data: AnyObject<T>,
    key: string,
    type: AnyClass<Y> | null = null,
    fallback: ValueOf<T> | null = null
  ) {
    if (data[key] === undefined) return;
    if (data[key] === null && fallback !== undefined)
      Object.assign(this, { [key]: fallback });
    else if (type)
      Object.assign(this, { [key]: typeConvertor(type, data[key]) });
    else Object.assign(this, { [key]: data[key] });
  }
}
