//https://teachablemachine.withgoogle.com/models/O-KIMFDpn/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/O-KIMFDpn/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'i can hear - '+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
        //document.getElementById("results_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        //document.getElementById("results_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('Ear');

        if (results[0].label == "Background Noise") {
            img.src = 'ERar.png';
        } else if (results[0].label == "Dog") {
            img.src = 'dog.gif';
        } else if (results[0].label == "Roar"){
            img.src = "lion.gif"
        } else if (results[0].label == "Cat") {
            img.src = 'cat.gif'; 
        }

    }
}