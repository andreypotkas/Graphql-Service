import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class genreAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.genres_url;
  }

  async getAllGenres() {
    const data = await this.get('');

    data.items.forEach((item) => {
      item.id = item._id;
    });
    console.log(`All genres`, data);
    return data.items;
  }

  async getGenreById(id) {
    const data = await this.get(`/${id}`);
    data.id = data._id;
    console.log(`Genre ${id}`, data);

    return data;
  }

  async createGenre(name, description, country, year) {
    const data = await this.post(
      '',
      { name, description, country, year },
      this.context.config
    );
    data.id = data._id;
    console.log(`Genre ${data.id} was created`, data);

    return data;
  }

  async updateGenre(id, name, description, country, year) {
    const data = await this.put(
      `/${id}`,
      { id, name, description, country, year },
      this.context.config
    );
    data.id = data._id;
    console.log(`Genre ${id} was updated`, data);
    return data;
  }

  async deleteGenre(id) {
    const data = await this.delete(`/${id}`, { id }, this.context.config);
    console.log(`Genre ${id} was deleted`, data);
    return data;
  }
}
