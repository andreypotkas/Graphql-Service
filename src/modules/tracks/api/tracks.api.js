import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class trackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.tracks_url;
  }

  async getAllTracks() {
    const data = await this.get('');

    data.items.forEach((item) => {
      item.id = item._id;
    });
    console.log(`All tracks`, data);
    return data.items;
  }

  async getTrackById(id) {
    const data = await this.get(`/${id}`);
    data.id = data._id;
    console.log(`Track ${id}`, data);

    return data;
  }

  async createTrack(createTrackInput) {
    const data = await this.post('', createTrackInput, this.context.config);
    data.id = data._id;

    console.log(`Track ${data.id} was created`, data);

    return data;
  }

  async updateTrack(id, updateTrackInput) {
    const data = await this.put(
      `/${id}`,
      updateTrackInput,
      this.context.config
    );
    console.log(data);
    console.log(`Track ${id} was updated`, data);
    return data;
  }

  async deleteTrack(id) {
    const data = await this.delete(`/${id}`, { id }, this.context.config);
    console.log(`Track ${id} was deleted`, data);
    return data;
  }

  async getBandsByIds(parent, context) {
    const bands = parent.bandsIds.map((item) =>
      context.dataSources.bandAPI.getBandById(item)
    );
    return await Promise.all(bands);
  }

  async getGenresByIds(parent, context) {
    const genres = parent.genresIds.map((item) => {
      return context.dataSources.genreAPI.getGenreById(item);
    });
    return await Promise.all(genres);
  }
}
