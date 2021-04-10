let wolksvagen = prompt('Где делают машину wolksvagen? 1 - Украниа 2 - Польша 3 - Германия');
    let Baseboll = prompt('Baseboll чей вид спорта? 1 - Франции 2 - Америки 3 - Португалии');
    let Ukraine = prompt('Столица Ukraine? 1 - Ватикан 2 - Киев 3 - Токио');
    let score = 0;
    if (wolksvagen == 3)
        score += 2;
    if (Baseboll == 2)
        score += 2;
    if (Ukraine == 2)
        score += 2;
    alert('Your score is ' + score);