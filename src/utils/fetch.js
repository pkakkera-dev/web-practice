export const fetchPhotos = value => {
  let query = value ? value : "";
  let url = `https://pixabay.com/api/?key=15392009-366715d9c5718905431daaa3d&pretty=true&image_type=photo&q=${query}`;
  return fetch(url)
    .then(res => res.json())
    .catch(error => console.error(" Something went wrong !"));
};
