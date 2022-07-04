import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class bandAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.bands_url;
  }

  async getAllBands() {
    const data = await this.get('');

    data.items.forEach((item) => {
      item.id = item._id;
    });
    console.log(`All bands`, data);
    return data.items;
  }

  async getBandById(id) {
    const data = await this.get(`/${id}`);
    data.id = data._id;
    console.log(`Band ${id}`, data);

    return data;
  }

  async createBand(createBandInput) {
    const data = await this.post('', createBandInput, this.context.config);
    data.id = data._id;
    console.log(`Band ${data.id} was created`, data);

    return data;
  }

  async updateBand(id, updateBandInput) {
    const data = await this.put(`/${id}`, updateBandInput, this.context.config);
    data.id = data._id;
    console.log(`Band ${id} was updated`, data);
    return data;
  }

  async deleteBand(id) {
    const data = await this.delete(`/${id}`, { id }, this.context.config);
    console.log(`Band ${id} was deleted`, data);
    return data;
  }
}
