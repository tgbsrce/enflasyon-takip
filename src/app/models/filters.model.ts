export class Filters {
  country?: string;
  start?: Date;
  end?: Date;

  constructor(data: Filters) {
    this.country = data.country || 'turkey';
    this.start = data.start;
    this.end = data.end;
  }
}
export interface DateParams {
  start?: Date;
  end?: Date;
}
export interface User {
  username: string;
  password: string;
}
export interface LoginResponse {
  token: string;
}
