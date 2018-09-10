export default {
  "forecast": {
    "countOfDays": 5
  },
  "mainTitle": "Aurelia Forecast",
  "cities" : [
    "Sofia",
    "London",
    "Moscow",
    "Paris",
    "Madrid",
    "Rome",
    "Berlin",
    "Brussels"
  ],
  "apixuWeatherUrlParams": {
    "url": "https://api.apixu.com/v1/current.json?",
    "keys": [
      {"key":"key", "value": "0f74ff777312470994165948180409"}
    ]
  },
  "apixuForecastUrlParams": {
    "url": "http://api.apixu.com/v1/forecast.json?",
    "keys": [
      {"key":"key", "value": "0f74ff777312470994165948180409"},
      {"key":"days", "value": 5}
    ]
  }
}
