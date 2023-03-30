// Function to render your items

const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collectionimg')


	// Loop through each item in the collection array
	collection.forEach(item => {
		const listItem = document.createElement('li') // Make the `li`

		const itemDetails =
			`
			<a href="https://www.are.na/alice-xia-wz4p1huxjl0/modern-sketch-full-archive"target="_blank"><img src="${item.imgLink}"></a>
			
				<p class="greycliffregular bold">${item.name}</p>
				<p class="greycliffregular">${item.authors}</p>
				<p class="greycliffregular">Price: ${item.cost}</p>
				<p class="greycliffregular">Year: ${item.year}</p>
				
				
			`
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})

}

// Fetch gets your JSON file…
fetch('assets/full.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection) 
	})



	// <img src="${item.imgLink}"></a>