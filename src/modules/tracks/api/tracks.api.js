import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class trackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.tracks_url;
  }

  async getAllTracks() {
    const data = await this.get('');

    return data.items;
  }

  async getTrackById(id) {
    const data = await this.get(`/${id}`);

    return data;
  }

  async createTrack(createTrackInput) {
    const data = await this.post('', createTrackInput, this.context.config);

    return data;
  }

  //? Some issue
  async updateTrack(track) {
    const data = await this.put(
      `/${track.id}`,
      track.updateTrackInput,
      this.context.config
    );
    return data;
  }

  async deleteTrack(id) {
    const data = await this.delete(`/${id}`, { id }, this.context.config);

    return data;
  }
}
