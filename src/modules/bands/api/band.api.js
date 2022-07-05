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

    data.items.forEach((item) => {
      item.id = item._id;
    });
    return data.items;
  }

  async getBandById(id) {
    const data = await this.get(`/${id}`);
    data.id = data._id;
    return data;
  }

  async createBand(createBandInput) {
    const data = await this.post('', createBandInput, this.context.config);
    data.id = data._id;
    data.genres = createBandInput.genres;
    console.log(`Band ${data.id} was created`, data);

    return data;
  }

  async updateBand(id, updateBandInput) {
    const data = await this.put(`/${id}`, updateBandInput, this.context.config);

    data.id = data._id;
    data.genres = updateBandInput.genres;
    console.log(`Band ${id} was updated`, data);
    return data;
  }

  async deleteBand(id) {
    const data = await this.delete(`/${id}`, { id }, this.context.config);
    console.log(`Band ${id} was deleted`, data);
    return data;
  }

  async getGenresByIds(parent, context) {
    const genres = parent.genresIds.map((item) =>
      context.dataSources.genreAPI.getGenreById(item)
    );
    return await Promise.all(genres);
  }
}
