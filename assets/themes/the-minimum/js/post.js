// JavaScript Document
$(document).ready(function() {	
    //***********************
    //**异步加载评论开始***
        window.disqus_shortname = 'zzx'; // required: replace example with your forum shortname
    $('#disqus_container .comment').on('click',function(){
        $(this).html('加载中...');
        var that = this;
        $.getScript('http://' + disqus_shortname + '.disqus.com/embed.js',function(){$(that).remove()});
    });
	 //**异步加载评论开始结束***
    //***********************
});