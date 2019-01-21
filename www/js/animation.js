var image = document.getElementsByClassName("input_range");

 function change_etat() {
 	console.log("change");
	document.getElementsByTagName("img").src = "http://sandbox.manusset.com/beontime/i/arretdebus_" + this.value + ".svg";
		
}
 