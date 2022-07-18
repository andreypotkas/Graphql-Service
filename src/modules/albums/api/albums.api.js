import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class albumAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.albums_url;
  }

  async getAllAlbums(args) {
    const data = await this.get('');

    return data.items.slice(0, args.limit);
  }

  async getAlbumById(id) {
    const data = await this.get(`/${id}`);

    return data;
  }

  async createAlbum(album) {
    const data = await this.post('', album, this.context.config);

    return data;
  }

  //? Some issue
  async updateAlbum(album) {
    const data = await this.put(
      `/${album.id}`,
      album.updateAlbumInput,
      this.context.config
    );
    return data;
  }

  async deleteAlbum(id) {
    const data = await this.delete(`/${id}`, { id }, this.context.config);

    return data;
  }
}
