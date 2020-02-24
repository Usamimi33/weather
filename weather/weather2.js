function myFunction() {
  var url = 'https://api.openweathermap.org/data/2.5/forecast?q=London&APPID=4b5774e9f3d2a07b84f0f2f88e486224';
  var response = UrlFetchApp.fetch(url).getContentText();
  var json = JSON.parse(response);
  
  Logger.log(json.description.text)
}