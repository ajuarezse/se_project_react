const baseUrl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/posts`).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

export { getItems };
