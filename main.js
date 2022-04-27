Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90,
})

camera = document.getElementById("camera")
Webcam.attach(camera)

function take_snapshot(){
    Webcam.snap(function(data_uri){
        //document.getElementById("result").innerHTML = "<img id='capture_image' src='"+data_uri+"'/>" 
        document.getElementById("result").innerHTML = "<img id='capture_image' src='How-To-Be-A-Good-Father-Qualities-And-Involvement-910x1024.jpg'/>"
    })
}
console.log("ml5_version",ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/T3NlTxZIP/model.json",model_loaded)
function model_loaded(){
    console.log("model has been loaded")
}

function check(){
    img = document.getElementById("capture_image")
    classifier.classify(img,got_result)
}

function got_result(error,result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result)
        document.getElementById("result_name").innerHTML = result[0].label;
        document.getElementById("result_accuracy").innerHTML = result[0].confidence.toFixed(4)
    }
}