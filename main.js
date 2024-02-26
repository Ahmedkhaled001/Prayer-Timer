getPrayerTimes("Al Qāhirah")


// for download axios ---> npm install axios --save
let cities = ["CAIRO", "ALEXANDRIA", "MATROUH", "ASWAN", "SHARM ELSHEIKH"]
    
for(city of cities){
    let content = `
    <option class= "select-content">${city}</option>
    `
    document.getElementById("selectBox").innerHTML += content
}

document.getElementById("selectBox").addEventListener("change", function(){
    document.getElementById("cityName").innerHTML = selectBox.value
    if(this.value == "CAIRO"){
        getPrayerTimes("Al Qāhirah")
    }else if(this.value == "ALEXANDRIA"){
        getPrayerTimes("Al Iskandarīyah")
    }else if(this.value == "MATROUH"){
        getPrayerTimes("Maţrūḩ")
    }else if(this.value == "ASWAN"){
        getPrayerTimes("Aswān")
    }else if(this.value == "SHARM ELSHEIKH"){
        getPrayerTimes("Al Baḩr al Aḩmar")
    }
}
)

function getPrayerTimes(cityName){
    let params = {
        country: "EG",
        city: cityName
    }
    
    let url = "https://api.aladhan.com/v1/timingsByCity/:date"

        axios.get(url , {
            params: params
        })
        .then(function (response) {
            let timing = response.data.data.timings
            fillPrayerTimes("fajrTime",timing.Fajr)
            fillPrayerTimes("sunriseTime",timing.Sunrise)
            fillPrayerTimes("dhuhrTime",timing.Dhuhr)
            fillPrayerTimes("asrTime",timing.Asr)
            fillPrayerTimes("maghribTime",timing.Maghrib)
            fillPrayerTimes("ishaTime",timing.Isha)
        })
        .catch(function (error) {
            console.log(error);
        })
    
}


    function fillPrayerTimes(id,time){
        document.getElementById(id).innerHTML = time
    }

getPrayerTimes()

