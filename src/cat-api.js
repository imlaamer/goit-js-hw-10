import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_dQKLBOPn62xcrnLiD0Lzl84O7Bv3kU02CEEDXi6avZ430KSu9IGO0wEQv2Upst8q';

const BASE_URL = 'https://api.thecatapi.com/v1';

export class CatApi {
  constructor() {
    this.has_breeds = 1; //?
  }

  fetchBreeds() {
    const url = `${BASE_URL}/breeds`;
    return axios.get(url).then(response => response.data)
  }

  fetchCatByBreed(breedId) {
    const params = `?breed_ids=${breedId}`; //?
    const url = `${BASE_URL}/images/search${params}`;
    return axios.get(url).then(response => response.data);
  }

}
