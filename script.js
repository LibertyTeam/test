$.get('txt.txt', function(data) {    
    var lines = data.split("\n");

    $.each(lines, function(n, elem) {
       $('body').append('<div>' + elem + '</div>');
    });
});
$(function (){ 
    $('button').click(function(){
       var text = $('input').val(); 
       $('p').text(text);
    });
});