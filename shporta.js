
//funksioni per te proceduar me pagesen
function pagesa(){
	let x=confirm("Deshironi te procedoni me pagesen?");
	if(x==true){
		alert("Shtypni OK per te paguar!");
	}
	else{
		alert("Vazhdoni blerjet!");
	}
}
//funksioni per te rritur sasine e elementeve ne shport
        function rrit_sasine(id) {
            let input = document.getElementById(id);
            input.value = parseInt(input.value) + 1;
			
        }
        function ul_sasine(id) {
            let input = document.getElementById(id);
            if (Number(input.value) > 1) {
                input.value = Number(input.value) - 1;
            }
        }

//funksioni  i shtimit te produktit ne kod
function shto_ne_shport(){
	let prev_value=Number(sessionStorage.getItem("cart")) || 0;
	//Number()konverton nje vlere ne numer (integer ose float)
	let new_value=prev_value+1;
    sessionStorage.setItem("cart", new_value);
	// sessionStorage.setItem lejon ruajtjen e te dhenave brenda shfletuesit
	document.getElementById("totalQuantity").innerHTML=new_value;
	
}
//kodi per i ben update sasise se shportes ne te gjitha faqet
let inital_value=Number(sessionStorage.getItem("cart")) || 0;
document.getElementById("totalQuantity").innerHTML=inital_value;
//getElementById e perdoret per te marr nje element sipas ID te tij
//innerHTML perdoret per te marre ose vendosur permbajtjen HTML te nje elementi

