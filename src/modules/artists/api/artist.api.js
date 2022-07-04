import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class artistAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.artists_url;
  }

  async getAllArtists() {
    const data = await this.get('');

    data.items.forEach((item) => {
      item.id = item._id;
    });
    console.log(`All artists`, data);
    return data.items;
  }

  async getArtistById(id) {
    const data = await this.get(`/${id}`);
    data.id = data._id;
    console.log(`Artist ${id}`, data);

    return data;
  }

  async createArtist(createArtistInput) {
    const data = await this.post('', createArtistInput, this.context.config);
    data.id = data._id;
    console.log(`Artist ${data.id} was created`, data);

    return data;
  }

  async updateArtist(id, updateArtistInput) {
    const data = await this.put(
      `/${id}`,
      updateArtistInput,
      this.context.config
    );
    data.id = data._id;
    console.log(`Artist ${id} was updated`, data);
    return data;
  }

  async deleteArtist(id) {
    const data = await this.delete(`/${id}`, { id }, this.context.config);
    console.log(`Artist ${id} was deleted`, data);
    return data;
  }
}
