import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class UserService {
  async find(
    id?: number,
    sortByField?: string,
    sortByDirection?: string,
    startsWithField?: string,
    startsWith?: string,
  ) {
    let res = [];
    console.log(
      'User: ',
      id,
      sortByField,
      sortByDirection,
      startsWithField,
      startsWith,
    );
    const get = await axios.get(
      `https://jsonplaceholder.typicode.com/users${id ? `/${id}` : ''}`,
    );
    if (get.status === 200) {
      res = Array.isArray(get?.data) ? get.data : [get.data];

      if (sortByDirection && sortByField) {
        res = res.sort((a, b) => {
          if (a && b) {
            return sortByDirection === 'ASC'
              ? String(a[sortByField])?.localeCompare(String(b[sortByField]))
              : String(b[sortByField])?.localeCompare(String(a[sortByField]));
          }
          return -1;
        });
      }
      if (startsWithField && startsWith) {
        res = res.filter(p =>
          String(p[startsWithField])
            .toLowerCase()
            .startsWith(startsWith.toLowerCase()),
        );
      }
    }
    return res;
  }
}
