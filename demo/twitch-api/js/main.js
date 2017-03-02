var info = [];
$('#buttons p').on('click', function() {
    $('#buttons p').removeClass('selected');
    $(this).toggleClass('selected');
    var status = $(this).attr('data-status');
    $('#list-of-channels>div').removeClass('hidden');
    switch(status) 
    {
        case 'all': $('#list-of-channels>div').removeClass('hidden'); $('#search-field').removeClass('hidden'); break;
        case 'online': 
            $('#list-of-channels').find('.channel-offline').parent().parent().addClass('hidden'); 
            $('#list-of-channels').find('.channel-online').parent().parent().removeClass('hidden');
            if(!$('#search-field').hasClass('hidden')) 
            {
                $('#search-field').addClass('hidden');
            }
        break;
        case 'offline': 
            $('#list-of-channels').find('.channel-online').parent().parent().addClass('hidden'); 
            $('#list-of-channels').find('.channel-offline').parent().parent().removeClass('hidden');
            if(!$('#search-field').hasClass('hidden')) 
            {
                $('#search-field').addClass('hidden');
            }
        break;
    }
});

  
(function(){
    var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    var channels_length = channels.length;
    for(var i = 0, count = 0; i < channels_length; i++) 
    {
        $.getJSON("https://wind-bow.gomix.me/twitch-api/channels/"+channels[i]+"?callback=?", function(response){
            (function(){
                $('#list-of-channels').append(formList(response));
            })();
        });
    }
    for(var i = 0, count = 0; i < channels_length; i++) 
    {
        getStream(channels[i], function(channel, stream){ 
            if(stream) 
            {
                $('#list-of-channels').find('#'+channel.toLowerCase()+' .channel-status').addClass('channel-online');
                $('#list-of-channels').find('#'+channel.toLowerCase()+' .current-stream').text(stream.channel.status);
                $('#list-of-channels').find('#'+channel.toLowerCase()+' a').attr('href', stream.channel.url);
                $('#list-of-channels').find('#'+channel.toLowerCase()+' a').attr('target', '_blank');
            } 
            else 
            {
                $('#list-of-channels').find('#'+channel.toLowerCase()+' .channel-status').addClass('channel-offline');
                $('#list-of-channels').find('#'+channel.toLowerCase()+' .current-stream').text('');
            }
        });
    }
    
    $('#search').on('keyup', function() {
        var compare = $(this).val().toLowerCase();
        var $containers = $('#list-of-channels').find('>div');
        var length = $containers.length;
        for(var i=0; i < length; i++) 
        {
            var string = $($containers[i]).attr('id').toLowerCase();
            if(string.indexOf(compare) >= 0) 
            {
                $($containers[i]).removeClass('hidden');
            } 
            else 
            {
                $($containers[i]).addClass('hidden');
            }
        }
    });
})();
  
function formList(response) {
    var display = "";
    display += "<div id='"+response.display_name.toLowerCase()+"' class='channel-item'>";
    display += "<a href='"+response.url+"'>";
    display += "<div class='channel-info'>";
    display += "<img src='"+response.logo+"'>";
    display += "<div>"
    display += "<h4>"+response.display_name+"</h4>";
    display += "<span class='current-stream'></span>";
    display += "</div>"
    display += "</div>";
    display += "<div class='channel-status'><div></div>";
    display += "</div>";
    display += "</a>";
    display += "</div>";
    return display;
}
  
function getStream(channel, callback) {
    $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/"+channel+"?callback=?", function(response){
        if(response.stream) 
        {
            callback(channel, response.stream);
        } 
        else 
        {
            callback(channel, null);
        }     
    });
}