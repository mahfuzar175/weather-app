# Weather App

This is a single-page weather application built with React.js that allows users to search for a location and view its current weather information.

## Requirements

- Node.js (v14.0.0 or newer)
- npm (v6.14.0 or newer)
- Internet connection (to fetch weather data from the API)

## Installation

1. Clone the repository:

```
git clone https://github.com/yourusername/weather-app.git
```

2. Navigate to the project directory:

```
cd weather-app
```

3. Install dependencies:

```
npm install
```

## Usage

1. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api) or any other weather API provider of your choice.

2. Create a `.env` file in the root directory of the project and add your API key:

```
REACT_APP_API_KEY=your_api_key_here
```

3. Start the application:

```
npm start
```

4. Open your web browser and go to `http://localhost:3000` to view the application.

## Features

- Search bar to input the name of a location.
- Fetches weather data using a weather API.
- Displays current weather conditions including temperature, description, humidity, etc.
- Basic error handling for invalid search queries or failed API requests.
- Animated weather information for enhanced user experience.
- Responsive design for different screen sizes.

## Technologies Used

- React.js
- HTML
- CSS
- Tailwind CSS
- Framer Motion
- React Icons
- OpenWeatherMap API
