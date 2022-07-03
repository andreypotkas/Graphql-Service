import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class userAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.users_url;
  }

  async signup(firstName, lastName, email, password, id) {
    const data = await this.post(`/register`, {
      firstName,
      lastName,
      email,
      password,
      id,
    });
    data.id = data._id;
    console.log(`getJWT`, data);

    return data;
  }

  async getJWT(email, password) {
    const data = await this.post(`/login`, { email, password });
    console.log(`getJWT`, data);

    return data;
  }
  // GET
  async getUserById(id) {
    const data = await this.get(`/${id}`);
    console.log(`getJWT`, data);

    return data;
  }

  // POST
  async postMovie(movie) {
    return this.post(
      `movies`, // path
      movie // request body
    );
  }

  // PUT
  async newMovie(movie) {
    return this.put(
      `movies`, // path
      movie // request body
    );
  }

  // PATCH
  async updateMovie(movie) {
    return this.patch(
      `movies`, // path
      { id: movie.id, movie } // request body
    );
  }

  // DELETE
  async deleteMovie(movie) {
    return this.delete(
      `movies/${encodeURIComponent(movie.id)}` // path
    );
  }
}
