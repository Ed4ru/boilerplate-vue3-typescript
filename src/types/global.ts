export interface AnyClass {
  new (...args: any[]): any;
}

export interface AnyObject {
  [key: string]: any;
}
