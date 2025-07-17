import { baseUrl } from "./config";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getItems() {
  return fetch(`${baseUrl}/api/items`).then(checkResponse);
}

function addItem({ name, imageUrl, weather }, token) {
  return fetch(`${baseUrl}/api/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(checkResponse);
}

function deleteItem(id, token) {
  return fetch(`${baseUrl}/api/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

function editUserProfile({ name, avatar }, token) {
  return fetch(`${baseUrl}/api/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      avatar,
    }),
  }).then(checkResponse);
}

function addCardLike(id, token) {
  return fetch(`${baseUrl}/api/items/${id}/likes`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

function removeCardLike(id, token) {
  return fetch(`${baseUrl}/api/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

export {
  getItems,
  addItem,
  deleteItem,
  checkResponse,
  editUserProfile,
  addCardLike,
  removeCardLike,
};
