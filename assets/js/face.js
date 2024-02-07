function updateFace(event) {
    let face = document.getElementById("face");
    let basePath = "assets/img/face/";

    let x = event.clientX;
    let y = event.clientY;
    let h = document.body.clientHeight;
    let w = document.body.clientWidth;

    console.log(w, h);
    
    //check upper half
    if (y/h < .25){
        //top left
        if (x/w < .25){
            face.src = basePath + "top-left.jpg";
        }

        //up
        if (x/w > .25 & x/w < .75){
            face.src = basePath + "up.jpg";
        }

        //top right
        if(x/w > .75){
            face.src = basePath + "top-right.jpg";
        }
    }

    //check middle
    if (y/h > .25 & y/h < .75){
        //left
        if (x/w < .25){
            face.src = basePath + "left.jpg";
        }

        //center
        if (x/w > .25 & x/w < .75){
            face.src = basePath + "front.jpg";
        }

        //right
        if(x/w > .75){
            face.src = basePath + "right.jpg";
        }
    }

    //check bottom
    if (y/h > .75){
        //bottom-left
        if (x/w < .25){
            face.src = basePath + "bottom-left.jpg";
        }

        //down
        if (x/w > .25 & x/w < .75){
            face.src = basePath + "down.jpg";
        }

        //bottom-right
        if(x/w > .75){
            face.src = basePath + "bottom-right.jpg";
        }
    }

    console.log(x/w, y/h);
}