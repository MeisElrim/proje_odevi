function logIn() {
    var userName = document.getElementById("un").value;
    var password = document.getElementById("pa").value;

    if (userName == "meys.isaelhatib@sakarya.edu.tr" && password == "g211210577") {
        window.open("index.html");
    } else {
        alert("Not Correct")
    }
}


//ilgi//
//const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
//const options = {
	//method: 'GET',
	//headers: {
	//	'X-RapidAPI-Key': '43f19862edmsh252bf7af851a1bcp17ca5cjsn962a66c723ec',
	//	'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	//}
//};

//try {
//	const response = await fetch(url, options);
//	const result = await response.text();
//	console.log(result);
//} catch (error) {
//	console.error(error);
//}