export const  usersUrl = '/';
export const usersApi = 'https://jsonplaceholder.typicode.com/users';

export const  makeUserAlbumListUrl = userId => `/users/${userId}/albums`;
export const  userAlbumListUrl = makeUserAlbumListUrl(':userId');

export const  makeUserAlbumUrl = (userId, albumId) => `/users/${userId}/albums/${albumId}`;
export const  userAlbumUrl = makeUserAlbumUrl(':userId', ':albumId');
