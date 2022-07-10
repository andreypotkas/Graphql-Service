import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class artistAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.artists_url;
  }

  async getAllArtists(args) {
    const data = await this.get('');

    return data.items.slice(0, args.limit);
  }

  async getArtistById(id) {
    const data = await this.get(`/${id}`);

    return data;
  }

  async createArtist(artist) {
    const data = await this.post('', artist, this.context.config);

    return data;
  }

  async updateArtist(artist) {
    const data = await this.put(
      `/${artist.id}`,
      artist.updateArtistInput,
      this.context.config
    );

    return data;
  }

  async deleteArtist(id) {
    const data = await this.delete(`/${id}`, { id }, this.context.config);

    return data;
  }
}
