window.onload = function () {
    //DOM構築後に実行したい関数の呼び出し
    weatherBallon('London');
};

      
function weatherBallon(cityName) {
    var key = '4b5774e9f3d2a07b84f0f2f88e486224';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key).then(function (response) { return response.json() }) // APIから取った情報をJson形式に変換
      .then(function(jsonFile) {
        drawWeather(jsonFile);
        console.log(document.getElementById('unchi'));

  
      })
      .catch(function() {
        document.getElementById('weather').innerHTML = "該当する場所がありません";
      });
}
    
function drawWeather( jsonFile ) {
	var celcius = Math.round(parseFloat(jsonFile.main.temp)-273.15);
	
    
	document.getElementById('description').innerHTML = jsonFile.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = jsonFile.name;
}
      
     

