import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class userAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.users_url;
  }

  async createUser(firstName, lastName, email, password, id) {
    const data = await this.post(`/register`, {
      firstName,
      lastName,
      email,
      password,
      id,
    });
    data.id = data._id;
    console.log(`New User was created`, data);

    return data;
  }

  async verify() {
    const data = await this.post(`/verify`, {}, this.context.config);
    data.id = data._id;
    console.log(``, data);

    return data;
  }

  async getJWT(email, password) {
    const data = await this.post(`/login`, { email, password });
    console.log(`JWT`, data);

    return data;
  }

  async getUserById(id) {
    const data = await this.get(`/${id}`);
    data.id = data._id;
    console.log(`User ${id}`, data);

    return data;
  }
}
