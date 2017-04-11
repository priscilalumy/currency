const url = 'https://api.fixer.io/latest?base='
let vAmount = "";
let vFrom = "";
let vTo = "";
let vValue = "";
let vRate = "";

// get currency from
let vFindFrom = document.getElementById('convert_from');
vFindFrom.addEventListener('change', (e) => {
	vFrom = document.getElementById('convert_from').value;
	console.log(vFrom);
})

//get currency to
let vFindTo = document.getElementById('convert_to');
vFindTo.addEventListener('change', (e) => {
	vTo = document.getElementById('convert_to').value;
	console.log(vTo);
})

//convert the amount to the chosen currrency
document.getElementById('bt_convert').addEventListener('click', (e) => {
	e.preventDefault();

	// get amount input 
	vAmount = document.getElementById('input_amount').value;
	console.log(vAmount);

	console.log(vFrom);
	console.log(vTo);

	fetch(`${url}${vFrom}`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data)
			vRate = data.rates[vTo];
			console.log(vRate);
			vValue = vAmount*vRate;
			console.log(vValue);
			fShowConversion();
		})
		.catch((e) => console.log(`${e} You got an error`))
})

// show the conversion inside the table
function fShowConversion() {
	document.getElementById('view_box').innerHTML = '<p>'+vAmount+' '+vFrom+' is equal to '+vValue+' '+vTo;
}