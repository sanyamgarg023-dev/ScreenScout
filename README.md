# ScreenScout

## Project Overview

ScreenScout is a responsive web application that allows users to search for movies by name and view detailed information such as movie poster, IMDb rating, release year, genre, and plot. The application uses the OMDb API to fetch real-time movie data. Users can add movies to their favourites list, switch between dark and light mode, and sort movie results based on rating or release year.

## Features

- **Trending Movies**: Display trending movies from TMDB API.
- **Movie Search**: Search for movies by title in real-time.
- **Movie Details**: Display movie poster, rating, and title information.
- **Sorting Options**: Sort movie results by trending or highest rated.
- **Dark/Light Mode Toggle**: Switch between dark and light themes with persistent theme storage.
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- **Real-Time Filtering**: Instant search results as you type.
- **Error Handling**: Graceful error handling for API failures.
- **Modern Code Structure**: Clean, modular JavaScript using ES6+ async/await and higher-order functions.

## Tech Stack

- **HTML**: For structuring the web pages.
- **CSS**: For styling (or frameworks like Tailwind CSS / Bootstrap for enhanced styling).
- **JavaScript**: For interactivity, API calls using Fetch API, and data manipulation with array higher-order functions.

## API Information

This project uses [The Movie Database (TMDB) API](https://www.themoviedb.org/) to fetch real-time movie data.

- **API Endpoint**: `https://api.themoviedb.org/3`
- **API Key**: Access token from [TMDB](https://www.themoviedb.org/settings/api)
- **Features Used**:
  - Trending movies endpoint (`/trending/movie/week`)
  - Movie poster images via TMDB image service
  - Vote averages and detailed movie information