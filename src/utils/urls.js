export const  usersRoute = '/';

export const  makeUserAlbumListUrl = userId => `users/${userId}/albums`;
export const  userAlbumListUrl = makeUserAlbumListUrl(':userId');

export const  makeUserAlbumUrl = (userId, albumId) => `users/${userId}/albums/${albumId}`;
export const  userAlbumUrl = makeUserAlbumListUrl(':userId', ':albumId');
