function cekLogin(){
	//tangkap request form
	let frm  = window.document.getElementById("formulir");
	let uname = frm.username.value;
	let pwd = frm.password.value;
	if(uname == "Mimin" && pwd == "mimin123"){
		alert("Selamat Datang Mimin, Anda Administrator")
	}
	else if(uname == "Budi" && pwd == "budi123"){
		alert("Selamat Datang Budi, Anda Operator")
	}
	else{
		alert("Maaf Anda Gagal Login" )
	}
}
		
function kosongin(){
	//tangkap request form
	let frm  = window.document.getElementById("formulir");
	frm.username.value = "";
}

function kosongin2(){
	//tangkap request form
	let frm  = window.document.getElementById("formulir");
	frm.password.value = "";
}