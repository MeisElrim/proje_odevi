function logIn() {
	var userName = document.getElementById("un").value;
	var password = document.getElementById("pa").value;

	if (userName == "meys.isaelhatib@sakarya.edu.tr" && password == "g211210577") {
		window.open("index.html");
	} else {
		alert("Not Correct")
	}
}

fetch('https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw', {
	method: 'GET',
	headers: {
		'Accept-Language': 'tr-TR',
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Key': 'c51072e5d4msh8433e36a75eecb5p1dde00jsn353a8bba78a1',
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
	}
})
	.then(Response => Response.json())
	// .then(data => console.log(data)
	.then(data => {
		const list = data.value;
		console.log(list)
		list.map((item) => {
			console.log(item)
			const name = item.name;
			const poster = item.image.thumbnail.contentUrl;
			const movie = `<li><img src="${poster}"><h2>${name}</h2></li>`;
			document.querySelector('.news').innerHTML += movie;
		})
	}
	)


fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game', {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c51072e5d4msh8433e36a75eecb5p1dde00jsn353a8bba78a1',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
})
	.then(Response => Response.json())
	// .then(data => console.log(data))
	.then(data => {
		const list = data.d;
		list.map((item) => {
			console.log(item)
			const name = item.l;
			const poster = item.i.imageUrl;
			const movie = `<li><img src="${poster}"><h2>${name}</h2></li>`;
			document.querySelector('.movies').innerHTML += movie;
		})
	})



	.catch(err => {
		console.log(err);
	});