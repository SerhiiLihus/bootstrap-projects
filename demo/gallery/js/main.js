var images = [
	'http://i.imgur.com/qK42fUu.jpg',
	'https://images.unsplash.com/photo-1435771112039-1e5b2bcad966?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450',
	'https://images.unsplash.com/photo-1442406964439-e46ab8eff7c4?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450',
	'https://images.unsplash.com/photo-1444090542259-0af8fa96557e?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450',
	'https://images.unsplash.com/photo-1434543177303-ef2cc7707e0d?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450',
	'https://images.unsplash.com/photo-1436262513933-a0b06755c784?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450',
	'https://images.unsplash.com/photo-1439396087961-98bc12c21176?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450',
	'https://images.unsplash.com/photo-1439694458393-78ecf14da7f9?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450'
];


var container = document.getElementById('gallery-container');
var length = images.length;
var string = "";

for(var i = 0 ; i < length ; i++)
{
	string += '<div class="col-lg-4 col-sm-6">';
		string += '<div class="thumbnail">';
			string += '<img src="'+images[i]+'">';
		string += '</div>';
	string += '</div>';
}

container.innerHTML = string;