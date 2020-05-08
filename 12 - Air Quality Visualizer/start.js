(() => {
  // เริ่มเขียนโค้ด
  const key = 'bf346ded-2981-45a3-bfea-f4bb3a33d9b8';

  async function getAirQuality({city,state,country}){
    const response = await fetch(`https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${key}`)
    const { data : {current} } = await response.json();
    const {pollution, weather} = current;
    return {
      aqi : pollution.aqius,
      temperature : weather.tp,
      humidity : weather.hu,
      wind : weather.ws
    }
  }

  function setText(eSelector,value){
    const elem = document.querySelector(eSelector);
    elem.innerText = value;
  }

  function displayAirQuality({city,state,country,aqi,temperature,humidity,wind}){
    setText('.city',city);
    setText('.state-country',`${state}, ${country}`);
    setText('.aqi > h1',aqi);
    setText('.temperature',`Temp: ${temperature}`);
    setText('.humidity',`Humidity: ${humidity}%`);
    setText('.wind',`Wind: ${wind} m/s`);
  }

  function setAirQualityColor(aqi){
    if(aqi <= 50){
      document.documentElement.style.setProperty(
        '--current-aqi-color',
        'var(--good-aqi-color)'
      );
    }else if(aqi <= 100){
      document.documentElement.style.setProperty(
        '--current-aqi-color',
        'var(--medium-aqi-color)'
      );
    }else{
      document.documentElement.style.setProperty(
        '--current-aqi-color',
        'var(--bad-aqi-color)'
      );
    }
  }

  async function run(){
    const city = 'Patan';
    const state = 'Central Region';
    const country = 'Nepal';
    const {aqi,temperature,humidity,wind} = await getAirQuality({city,state,country});
    displayAirQuality({
      city,state,country,aqi,temperature,humidity,wind
    });
    setAirQualityColor(aqi);
  }

  run();

})();
