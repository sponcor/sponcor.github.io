document.getElementById('click-for-name').addEventListener('click', function() {
    document.getElementById('screen-name').innerHTML = document.getElementById('nameID').value.trim()+", did you know that..."
  })


$(document).ready(function() {
    $('#js-tweet').click(function() {

var limit = 1;

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/facts?limit=' + limit,
    headers: { 'X-Api-Key': 'yw/eQqSnrQPNFtrrlTfD1A==WdAPd4XbO5NKYYZl'},
    contentType: 'application/json',
    success: function(result) {
        $('#js-answer-text').text(JSON.stringify(result, null, 2));
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
});
});

