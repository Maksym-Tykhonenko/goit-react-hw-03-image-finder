
const BASE_URL = 'https://pixabay.com/api/';  
const API_KEY = '29676821-2dfd501c3768e552959bc01fb';
const IMAGES_PER_PAGE = 12;

export const getImgs = (query, page) => {
  return fetch(`${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${IMAGES_PER_PAGE}`)
    .then(response => response.json())
};
