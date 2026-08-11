/* Δημιουργεί τυχαίες καιρικές συνθήκες για την προσομοίωση.
Η συνάρτηση επιστρέφει όλες τις πληροφορίες που χρειάζονται τα components της εφαρμογής, όπως
θερμοκρασία, υγρασία, εικόνες, προτάσεις για τον κλιματισμό και τη λειτουργία της οροφής. */

import sunnyBg from "../assets/images/weather/sunny.png";
import cloudyBg from "../assets/images/weather/cloudy.png";
import rainyBg from "../assets/images/weather/rainy.png";
import snowBg from "../assets/images/weather/snowy.png";

import sun from "../assets/images/weather/sun.png";
import clouds from "../assets/images/weather/clouds.png";
import rain from "../assets/images/weather/rain.png";
import snow from "../assets/images/weather/snow.png";

// Δημιουργεί έναν τυχαίο ακέραιο αριθμό μέσα σε συγκεκριμένο εύρος.
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Δημιουργεί ένα νέο σύνολο καιρικών δεδομένων.
export function generateWeather() {
    const temperature = random(-5, 35);
    let condition;
    let image;
    let icon;
    let advice;
    let humidity;
    let uv;

    if (temperature < 0) {
        condition = "Snow";
        humidity = random(80,95);
        uv = random(0,1);
        image = snowBg;
        icon = snow;
    }
    else if (temperature < 10) {
        condition = "Rain";
        humidity = random(70,90);
        uv = random(1,3);
        image = rainyBg;
        icon = rain;
    }
    else if (temperature < 20) {
        condition = "Cloudy";
        humidity = random(50,75);
        uv = random(3,5);
        image = cloudyBg;
        icon = clouds;
    }
    else {
        condition = "Sunny";
        humidity = random(20,60);
        uv = random(5,11);
        image = sunnyBg;
        icon = sun;
    }
    const feelsLike = temperature + random(-2,4);

    let recommendation;
    let message;
    let roofmessage;
    let rooftitle;

    if (temperature >= 28) {
        recommendation = "Stay Cool";
        message = "The bus is getting warm. Activate cooling for a more pleasant journey.";
        advice = "cool";
    }
    else if (temperature <= 16) {
        recommendation = "Stay Warm";
        message = "The bus is getting cold. Activate heating for a comfortable journey.";
        advice = "warm";
    }
    else {
        recommendation = "All Good";
        message = "Everything looks comfortable. No action is needed.";
        advice = "good";
    }
    // ROOF MESSAGE
    if (condition === "Rain" || condition === "Snow") {
    rooftitle = `${condition} detected`;
    roofmessage = "Closing the roof is recommended.";
    }   
    else if (condition === "Sunny") {
        rooftitle= "Good weather detected";
        roofmessage = "Opening the roof is recommended.";
    }
    else if (condition === "Cloudy") {
        rooftitle= "Weather conditions are mild";
        roofmessage = "You can open the roof for natural ventilation.";
    }
    
    return {

        temperature,
        feelsLike,
        humidity,
        uv,
        condition,
        image,
        icon,
        recommendation,
        message,
        advice,
        roofmessage,
        rooftitle
    }
}
