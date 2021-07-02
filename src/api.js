import axios from 'axios';

const client = axios.create({
  baseURL:
    'https://outside-in-dev-api.herokuapp.com/L0zDUEygBcByT1fkNYho28skt5Cey7pv',
});

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
  createRestaurant(name) {
    return client.post('/restaurants', {name}).then(response => response.data);
  },
};

export default api;
