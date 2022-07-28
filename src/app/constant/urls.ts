import {environment} from '../../environments/environment';

const {API} = environment;

export const urls = {
  products: `${API}/products`,
  categories: `${API}/products/category/getAll`,
  createProduct: `${API}/products/category`,
  auth: `${API}/auth`,
  users: `${API}/users`,
}
