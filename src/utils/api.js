const baseUrl = "http://localhost:3001"; // Ensure there's a trailing slash if needed

function getItems() {
  return fetch(`${baseUrl}/posts`).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

export { getItems };
