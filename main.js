const animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

const food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];

const universes = [
	['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
	['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
]

function getInfo(arr, arrHeader){
	let tbl = document.createElement("table");
	let tblBody = document.createElement("tbody");
	
	let tblHead = document.createElement("thead");
	let headText = document.createTextNode(arrHeader)
	tblHead.appendChild(headText);
	tbl.appendChild(tblHead);

	for (i = 0 ; i < arr.length; i++){
		let row = document.createElement("tr");
		for (b = 0; b < arr[i].length; b++){
			let cell = document.createElement("td");
			if(Array.isArray(arr[i][b])){
				newCell = arr[i][b].join('; ')
			}else{newCell = arr[i][b]}
        	let cellText = document.createTextNode(newCell)
        	cell.appendChild(cellText);
        	row.appendChild(cell);
	    }

		tblBody.appendChild(row);
	}

	tbl.appendChild(tblBody);

	return tbl
}

let resultAnim = getInfo(animals,`Animals info`)
let resultFood = getInfo(food,`Food info`)
let resultUniv = getInfo(universes,`Universes info`)

document.body.appendChild(resultAnim);
document.body.appendChild(resultFood);
document.body.appendChild(resultUniv);