export default {
  "mainTitle": "Aurelia Forecast",
  "cities" : [
    "Sofia",
    "Plovdiv",
    "Pazardzhik",
    "Stara Zagora",
    "Kardzhali",
    "Vidin",
    "Montana",
    "Vratsa",
    "Pleven",
    "Veliko Tarnovo",
    "Ruse",
    "Razgrad",
    "Silistra",
    "Dobrich",
    "Lovech",
    "Gabrovo",
    "Sliven",
    "Burgas",
    "Varna",
    "Haskovo",
    "Yambol",
    "Kyustendil",
    "Pernik",
    "Blagoevgrad",
    "Kardzhali",
    "Haskovo",
    "Smolyan"
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
  },
  "forecast": {
    "countOfDays": 5
  }
}
