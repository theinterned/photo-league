export const  usersUrl = '/';
export const usersApi = 'https://jsonplaceholder.typicode.com/users';
export const userAlbumsApi = userId => `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
export const albumPhotosApi = albumId => `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;

export const  makeUserAlbumListUrl = userId => `/users/${userId}/albums`;
export const  userAlbumListUrl = makeUserAlbumListUrl(':userId');

export const  makeUserAlbumUrl = (userId, albumId) => `/users/${userId}/albums/${albumId}`;
export const  userAlbumUrl = makeUserAlbumUrl(':userId', ':albumId');
