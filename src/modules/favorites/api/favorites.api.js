import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class favouriteAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.favourites_url;
  }

  async getAllFavourites() {
    const data = await this.get('', {}, this.context.config);
    console.log(data);
    return data;
  }

  async addGenreToFavourites(genre) {
    const data = await this.put('/add', genre, this.context.config);
    return data;
  }
  async addArtistToFavourites(artist) {
    const data = await this.put('/add', artist, this.context.config);
    return data;
  }
  async addBandToFavourites(band) {
    const data = await this.put('/add', band, this.context.config);
    return data;
  }

  async addTrackToFavourites(favourite) {
    const data = await this.put('/add', favourite, this.context.config);
    return data;
  }

  async deletefavourite(id) {
    const data = await this.delete(`/${id}`, { id }, this.context.config);

    return data;
  }
}
