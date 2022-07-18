import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class userAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.users_url;
  }

  async createUser(user) {
    const data = await this.post(`/register`, user);

    return data;
  }

  async verify() {
    const data = await this.post(`/verify`, {}, this.context.config);

    return data;
  }

  async getJWT(email, password) {
    const data = await this.post(`/login`, { email, password });

    return data;
  }

  async getUserById(id) {
    const data = await this.get(`/${id}`);

    return data;
  }
}
