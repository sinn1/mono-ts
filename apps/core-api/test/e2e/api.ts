import supertest from 'supertest';

import config from './config';

type Methods = 'post' | 'get' | 'put' | 'delete';

export class Api {
  private token: string;

  private hook(method: Methods = 'post') {
    return (args: any) =>
      supertest(config.apiUrl)
        [method](args)
        .set('Authorization', `${this.token}`);
  }

  public post;
  public get;
  public put;
  public delete;

  constructor() {
    this.post = this.hook('post');
    this.get = this.hook('get');
    this.put = this.hook('put');
    this.delete = this.hook('delete');
  }

  setToken = (input: string): void => {
    this.token = input;
  };
}

export const createApi = (): Api => new Api();

export const adminApi = new Api();
