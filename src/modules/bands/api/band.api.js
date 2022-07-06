import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';
import { genreAPI } from '../../genres/api/genre.api.js';

export class bandAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.bands_url;
    this.genreService = new genreAPI();
  }

  async getAllBands() {
    const data = await this.get('');

    return data.items;
  }

  async getBandById(id) {
    const data = await this.get(`/${id}`);

    return data;
  }

  async createBand(band) {
    const data = await this.post('', band, this.context.config);

    return data;
  }

  async updateBand(band) {
    const data = await this.put(
      `/${band.id}`,
      band.updateBandInput,
      this.context.config
    );

    return data;
  }

  async deleteBand(id) {
    const data = await this.delete(`/${id}`, { id }, this.context.config);

    return data;
  }
}
