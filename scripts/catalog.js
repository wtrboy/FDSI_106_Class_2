var catalog = [];


function fetchData() {
    //get data from a server
    catalog = [
        // below is an object literal ->
        {
            code: '1',
            title: 'A Room With a View',
            price: 4261.26,
            imageURL: 'https://www.bl.uk/britishlibrary/~/media/bl/global/dl%2020th%20century/20th%20century%20collection%20items/a-room-with-a-cup_407_c_34_front_cover.jpg',
            quantity: 0,
            category: 'First Edition'
        },
        {
            code: '2',
            title: 'The King in Yellow',
            price: 250.00,
            imageURL: 'https://pictures.abebooks.com/BLKCAT/16708734559.jpg',
            quantity: 0,
            category: 'Memorial Edition'
        },
        {
            code: '3',
            title: 'The Unbearable Lightness of Being',
            price: 144.23,
            imageURL: 'https://pictures.abebooks.com/isbn/9780571326372-us.jpg',
            quantity: 0,
            category: 'Faber Member Edition'
        },
        {
            code: '4',
            title: 'Intruder in the Dust',
            price: 150.00,
            imageURL: 'https://pictures.abebooks.com/BETWEENTHECOVERS/30223471061.jpg',
            quantity: 0,
            category: 'First Edition'
        },
    ]
}

function displayCatalog() {
    // travel the array of items using a FOR loop
    // get each item
    // display the item on HTML

    for (let i = 0; i < catalog.length; i++) {
        var item = catalog[i];

        //display items on html
        var syntax =
            `<div class="item">
            <img src="${item.imageURL}">
            <div class="info">
                <label class="code">${item.code}</label>
                <label class="title">${item.title}</label>
                <label class="price">$ ${item.price.toFixed(2)}</label>

                <button class="btn btn-info btn-sm">Add</button>
            </div>
        </div>`;


        $("#catalog-container").append(syntax);
    }
}

function init() {
    console.log("Catalog Working!");

    fetchData();
    displayCatalog();
}




window.onload = init;

/*
    code
    title
    price
    imageURL
    quantity
    category

*/