const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-26/",
  headers: {
    authorization: "e50413bf-7a82-4c69-b949-39ad8d569f5c",
    "Content-Type": "application/json",
  },
};

const parseResponse = (response) =>
  response.ok
    ? response.json()
    : Promise.reject(`Ошибка: ${response.status}`);

const fetchWithConfig = (url, options = {}) =>
  fetch(url, {
    ...options,
    headers: config.headers,
  }).then(parseResponse);

export const getCurrentUser = () =>
  fetchWithConfig(`${config.baseUrl}users/me`);

export const getCardList = () =>
  fetchWithConfig(`${config.baseUrl}cards`);

export const modifyUserDetails = (about, name) =>
  fetchWithConfig(`${config.baseUrl}users/me`, {
    method: "PATCH",
    body: JSON.stringify({ name, about }),
  });

export const createNewCard = (nameCard, linkCard) =>
  fetchWithConfig(`${config.baseUrl}cards`, {
    method: "POST",
    body: JSON.stringify({ name: nameCard, link: linkCard }),
  });

export const removeCardById = (id) =>
  fetchWithConfig(`${config.baseUrl}cards/${id}`, {
    method: "DELETE",
  });

export const setCardLike = (id) =>
  fetchWithConfig(`${config.baseUrl}cards/${id}/likes`, {
    method: "PUT",
  });

export const removeCardLike = (id) =>
  fetchWithConfig(`${config.baseUrl}cards/${id}/likes`, {
    method: "DELETE",
  });

export const changeUserAvatar = (avatar) =>
  fetchWithConfig(`${config.baseUrl}users/me/avatar`, {
    method: "PATCH",
    body: JSON.stringify({ avatar }),
  });
