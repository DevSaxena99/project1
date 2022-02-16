const https = require("https");
const http = require("http");

module.exports.home=function(req,res){
   return res.render("home");
}

module.exports.country=function(req,res){
   return res.render("country");
}

module.exports.place=function(req,res){
   return res.render("state");
}

module.exports.country_search = function(req,res) {
  const country = req.body.country;
  const url = "http://api.openweathermap.org/geo/1.0/direct?q="+country+"&appid=54048e5804c5b9ce4e7600a6318b2f27";
  http.get(url,function(response) {
    response.on("data",function(data) {
        const wheatherData=JSON.parse(data);

        const lat=(wheatherData[0].lat);
        const lon=(wheatherData[0].lon);

        const url2 = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=54048e5804c5b9ce4e7600a6318b2f27";

        http.get(url2,function(resp) {
          resp.on("data",function(data) {
            const alldata=JSON.parse(data);
            const dataValue = {
              country: req.body.country,
              minTemp: alldata.main.temp_min,
              maxTemp: alldata.main.temp_max
            }

            return res.render("countryInfo",{dataValue});
          })
        })
      })
  })
}

module.exports.place_search = function(req,res) {
  const place = req.body.place;
  const url = "http://api.openweathermap.org/geo/1.0/direct?q="+place+"&appid=54048e5804c5b9ce4e7600a6318b2f27";
  http.get(url,function(response) {
    response.on("data",function(data) {
        const wheatherData=JSON.parse(data);

        const lat=(wheatherData[0].lat);
        const lon=(wheatherData[0].lon);

        const url2 = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=54048e5804c5b9ce4e7600a6318b2f27";

        http.get(url2,function(resp) {
          resp.on("data",function(data) {
            const alldata=JSON.parse(data);
            console.log(alldata);
            const dataValue = {
              place: req.body.place,
              description: alldata.weather[0].description,
              temp: alldata.main.temp,
              pressure: alldata.main.pressure,
              humidity: alldata.main.humidity,
              windSpeed: alldata.wind.speed
            }
            return res.render("stateInfo",{dataValue});
          })
        })
      })
  })
}
