//Ini Java Script

function validateForm() {
    const usernameInput = document.getElementById('name-input').value;
    console.log(usernameInput);
    if (usernameInput == '') {
        alert ('Formnya mohon di isi');
    } else {
        alert ('Sukses mengirim form');
    }
}

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List 
images[0] = "https://picsum.photos/500";
images[1] = "https://picsum.photos/600";
images[2] = "https://picsum.photos/700";


// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;