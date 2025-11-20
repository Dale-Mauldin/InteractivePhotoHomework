function upDate(previewPic){
    // 1) Change the background image to the preview image
    document.getElementById("image").style.backgroundImage = 
        "url('" + previewPic.src + "')";

    // 2) Change the text to the alt text of the preview image
    document.getElementById("image").innerHTML = previewPic.alt;
  
	}

	function unDo(){
    // 1) Reset the background image to the original (empty URL)
    document.getElementById("image").style.backgroundImage = "url('')";

    // 2) Reset the text to the original message
    document.getElementById("image").innerHTML = 
        "Hover over an image below to display here.";
	}