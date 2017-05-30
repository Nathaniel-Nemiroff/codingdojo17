function initialize()
{
	$('#show .change').hide();
	$('#slideDown .change').slideUp();
	$('#fadeIn .change').hide();
}

var addthis="<p>added content!</p>";

$('#hide .press').click(function(){$('#hide p').hide();});

$('#show .press').click(function(){$('#show .change').show();});

$('#toggle .press').click(function(){$('#toggle p').toggle();});

$('#slideDown .press').click(function(){$('#slideDown .change').slideDown();});

$('#slideUp .press').click(function(){$('#slideUp .change').slideUp();});

$('#slideToggle .press').click(function(){$('#slideToggle .change').slideToggle();});

$('#fadeIn .press').click(function(){$('#fadeIn .change').fadeIn();});

$('#fadeOut .press').click(function(){$('#fadeOut .change').fadeOut();});

$('#addClass .press').click(function(){$('#addClass p').addClass('red');});

$('#before .press').click(function(){$('#before p').before(addthis);});

$('#after .press').click(function(){$('#after p').after(addthis);});

$('#append .press').click(function(){$('#append p').append(addthis);});

$('#html .press').click(function(){$('#html p').html(addthis);});

$('#attr .press').click(function(){$('#attr p').attr("class", "red");});

$('#val .press').click(function()
{
	$('#val p').val("hello!");
	console.log("nothing actually happens here, I don't have input and thus there is nothing I can do with this at the moment");
});

$('#text .press').click(function(){$('#text p').text("added content!");});

$('#data .press').click(function()
{
	$('#data').data("stuff", " data's content...");
$('#data p').append($('#data').data("stuff"));
});
//$('#data p').append(jQuery.data(addthis, "stuff").first);
//$('#data p').append(jQuery.data(addthis, "stuff"), last);});




initialize();
