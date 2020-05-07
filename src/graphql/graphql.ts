
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Geo {
    lat?: number;
    lon?: number;
}

export class Address {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: Geo;
}

export class Company {
    name?: string;
    catchPhrase?: string;
    bs?: string;
}

export class User {
    id: number;
    username?: string;
    name?: string;
    phone?: string;
    website?: string;
    address?: Address;
    company?: Company;
    posts?: Post[];
}

export class Todo {
    id?: number;
    userId?: number;
    title?: string;
    completed?: boolean;
    user?: User;
}

export class Post {
    id?: number;
    userId?: number;
    title?: string;
    body?: string;
    user?: User;
}

export abstract class IQuery {
    abstract users(id?: number, sortByField?: string, sortByDirection?: string, startsWithField?: string, startsWith?: string): User[] | Promise<User[]>;

    abstract posts(id?: number, sortByField?: string, sortByDirection?: string, startsWithField?: string, startsWith?: string): Post[] | Promise<Post[]>;

    abstract todos(id?: number, sortByField?: string, sortByDirection?: string, startsWithField?: string, startsWith?: string): Todo[] | Promise<Todo[]>;
}
