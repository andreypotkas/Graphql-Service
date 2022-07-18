import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class genreAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.genres_url;
  }

  async getAllGenres(args) {
    const data = await this.get('');

    return data.items.slice(0, args.limit);
  }

  async getGenreById(id) {
    const data = await this.get(`/${id}`);

    return data;
  }

  async createGenre(genre) {
    const data = await this.post('', genre, this.context.config);

    return data;
  }

  async updateGenre(genre) {
    const data = await this.put(
      `/${genre.id}`,
      genre.updateGenreInput,
      this.context.config
    );

    return data;
  }

  async deleteGenre(id) {
    const data = await this.delete(`/${id}`, { id }, this.context.config);

    return data;
  }
}
