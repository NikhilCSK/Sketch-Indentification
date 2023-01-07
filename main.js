function setup()
{

    canvas = createCanvas(740,320);
    background("white");
    canvas.center();
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;

}

function preload()
{

    classifier = ml5.imageClassifier('DoodleNet');

}

function draw()
{

    stroke(0);
    strokeWeight(7);

    if (mouseIsPressed)
    {

        line(pmouseX, pmouseY, mouseX, mouseY);

    }

}

function classifyCanvas()
{

    classifier.classify(canvas, gotResult);

}

function gotResult(error,results)
{

    if(error)
    {

        console.error(error);

    }

    console.log(results);

    document.getElementById("label").innerHTML = "Sketch : " + results[0].label;

    document.getElementById("confidence").innerHTML = "Accuracy : " + Math.round(results[0].confidence * 100) + "%";

    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}

function clearCanvas()
{

    background("white");

}