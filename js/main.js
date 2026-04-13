const API_KEY = 'ab68beabbb77931996f67b37c994d60f';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjY4YmVhYmJiNzc5MzE5OTZmNjdiMzdjOTk0ZDYwZiIsIm5iZiI6MTc3NjA3NzIzMi4yMywic3ViIjoiNjlkY2M5YjBlNTMyZjY5MWRlZDkzOTU2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.yyUWvV5aDxWbjnqkcJjYMi09-1zHaTQTdEiUU2-B2es';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w300';

let allMovies = [];
let currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  document.getElementById('themeToggle').textContent = '☀️ Light Mode';
}

const fetchMovies = async (url) => {
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` }
  });
  return res.json();
};

const displayMovies = (movies) => {
  const container = document.getElementById('moviesContainer');
  if (movies.length === 0) {
    container.innerHTML = '<p class="loading">No movies found</p>';
    return;
  }
  container.innerHTML = movies.map(movie => `
    <div class="movie-card">
      <img src="${IMG_URL}${movie.poster_path}" alt="${movie.title}" class="movie-poster">
      <div class="movie-info">
        <div class="movie-title">${movie.title}</div>
        <div class="movie-rating">⭐ ${movie.vote_average?.toFixed(1)}</div>
      </div>
    </div>
  `).join('');
};

const filterMovies = (query) => {
  return allMovies.filter(m => 
    m.title?.toLowerCase().includes(query.toLowerCase())
  );
};

const sortByRating = (movies) => {
  return [...movies].sort((a, b) => b.vote_average - a.vote_average);
};

const loadTrending = async () => {
  try {
    const data = await fetchMovies(`${BASE_URL}/trending/movie/week`);
    allMovies = data.results || [];
    displayMovies(allMovies);
  } catch (error) {
    document.getElementById('moviesContainer').innerHTML = '<p class="loading">Error loading movies</p>';
  }
};

const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.trim();
  let results = query ? filterMovies(query) : allMovies;
  const sorted = sortSelect.value === 'rating' ? sortByRating(results) : results;
  displayMovies(sorted);
});

sortSelect.addEventListener('change', (e) => {
  const query = searchInput.value.trim();
  let results = query ? filterMovies(query) : allMovies;
  const sorted = e.target.value === 'rating' ? sortByRating(results) : results;
  displayMovies(sorted);
});

document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
  const btn = document.getElementById('themeToggle');
  btn.textContent = currentTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
});

loadTrending();
