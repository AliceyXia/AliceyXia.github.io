const dataUrl ='https://data.cityofnewyork.us/resource/nu7n-tubp.json'

fetch(dataUrl +'?$limit=9999999&BreedName=Golden Retriever')
	.then(response => response.json ())
	.then(data => {
			console.log(data)
	})
