console.log("Let's get this party started!");

async function getImage(query) {
    let res = await axios.get('http://api.giphy.com/v1/gifs/search', { params: { api_key: 'PIPc1u6U9ooqgkM5pC1RX8M1tHel8fHb', q: query} });

    return res;
}

function placeImage(url) {
    // Source (https://stackoverflow.com/questions/8013792/how-to-create-a-new-img-tag-with-jquery-with-the-src-and-id-from-a-javascript-o, accessed 12 May 2022)
    const $img = $(`<img src="${url}" alt="">`);
    
    $('#gifs').append($img);
}

$('#search-button').click(function(e) {
    e.preventDefault(); 
    let $query = $('#search').val();
    let result = getImage($query);

    console.log(result);
    console.log(result.data[0].url); 
    // placeImage(result.data[0].id); 
});

