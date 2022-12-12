import axios from 'axios';
import {baseUrl} from '../src/components/Axios';

const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
  });
