function ageFun () {
    let age = document.ageForm.ageIntro.value;
    let words = document.getElementById("divText");
    let photos = document.getElementById("divPhoto");

    if (age<= 0) {
        words.innerHTML="Введи свій вік нижче";
        photos.src="./img/kartinki-znak-voprosa-29.jpg";
    }
    else if (age >= 1 && age < 12) {
        words.innerHTML="Ти дитина";
        photos.src="./img/pablo - 2020-11-29T205235.235.png";

    }
    else if (age>=12 && age < 18) {
        words.innerHTML="Ти підліток";
        photos.src="./img/pablo - 2020-11-29T220254.558.png";
        
    }
    else if (age>=18 && age < 60) {
        words.innerHTML="Ти дорослий";
        photos.src="./img/pablo - 2020-11-29T222429.187.png";
        
    }
    else if (age>=60 && age < 100) {
        words.innerHTML="Ти пенсіонер"; 
        photos.src="./img/pablo - 2020-11-29T222941.404.png";
    }

    else if (age >= 100) {
        words.innerHTML="Введи свій вік нижче";
        photos.src="./img/kartinki-znak-voprosa-29.jpg";
    }
}