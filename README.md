# ScreenScout

## Project Overview

ScreenScout is a responsive web application that allows users to search for movies by name and view detailed information such as movie poster, IMDb rating, release year, genre, and plot. The application uses the OMDb API to fetch real-time movie data. Users can add movies to their favourites list, switch between dark and light mode, and sort movie results based on rating or release year.

## Features

- **Movie Search**: Search for movies by title using the OMDb API.
- **Detailed Movie Information**: Display movie poster, IMDb rating, release year, genre, and plot summary.
- **Favourites List**: Add and remove movies from a personal favourites list stored in local storage.
- **Sorting Options**: Sort movie results by rating or release year.
- **Dark/Light Mode Toggle**: Switch between dark and light themes for better user experience.
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- **Loading Indicator**: Shows a loading spinner during API requests.
- **Error Handling**: Basic error handling for invalid searches or API failures.
- **Clean Code Structure**: Modular JavaScript code using modern ES6+ features.

## Tech Stack

- **HTML**: For structuring the web pages.
- **CSS**: For styling (or frameworks like Tailwind CSS / Bootstrap for enhanced styling).
- **JavaScript**: For interactivity, API calls using Fetch API, and data manipulation with array higher-order functions.

## API Information

This project uses the [OMDb API](http://www.omdbapi.com/) to fetch movie data. The OMDb API is a free RESTful web service to obtain movie information.

- **API Endpoint**: `http://www.omdbapi.com/`
- **API Key**: You need to obtain a free API key from [OMDb API](http://www.omdbapi.com/apikey.aspx) to use the application.
- **Usage**: The API is called with parameters like `s` for search and `i` for detailed movie information.