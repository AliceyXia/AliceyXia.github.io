// Function to render your items

const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('fav')


	// Loop through each item in the collection array
	collection.forEach(item => {
		const listItem = document.createElement('li') // Make the `li`

		const itemDetails =
			`
            <img src="${item.imgLink}"></a>
            <p class="greycliffregular bold">${item.name}</p>
            <p class="greycliffregular">Year: ${item.year}</p>
				
			`
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})

}

// Fetch gets your JSON file…
fetch('assets/fav.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection) 
	})



