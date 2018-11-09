export const  usersRoute = '/';

export const  makeUserAlbumsUrl = userId => `users/${userId}/albums`;
export const  userAlbumsUrl = makeUserAlbumsUrl(':userId');
