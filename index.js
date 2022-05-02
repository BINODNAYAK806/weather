async function openW(){
    const city_name = document.getElementById("input");
    try {


        let out = await     fetch("https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid=9855d27f5236be2b46c897833426be00")
        let d_out = await out.joson()



    } catch (error){

        var E1 = document.createElement("h1")
        E1.textContent = "not in api"

        maindiv.append(E1)



    }



   

   
//    console.log(inp)
    
}

openW()

function dis(d_out){



    //(temp, pressure, humidity, wind speed, sunrise, sunset, weather description)

    var wed = document.getElementById("wed")

    var city_name = document.getElementById("city").value;

    var maindiv = document.getElementById("maindiv")

    var mtemp = document.createElement("h3")

    mtemp.innerText = d_out.main.temp_min

    var pressure = document.createElement("h3")
    pressure.innerText = d_out.main.pressure

    var humidity = document.createElement("h3")
    humidity.innerText = d_out.main.humidity



}

