$('.leftbutton').on('click', function() {
$('body').removeClass('seriousbg');
$('body').addClass('funbg');
$('#topbar1').removeClass('topbar')
$('#topbar1').addClass('topbarfun')
$('#maintextbox').removeClass('boxlinks')
$('#maintextbox').addClass('boxlinksfun')
$('#questions').removeClass('jqueryser')
$('#questions').addClass('jqueryfun')
});

$('.rightbutton').on('click', function() {
$('body').removeClass('funbg');
$('body').addClass('seriousbg');
$('#topbar1').removeClass('topbarfun')
$('#topbar1').addClass('topbar')
$('#maintextbox').removeClass('boxlinksfun')
$('#maintextbox').addClass('boxlinks')
$('#questions').removeClass('jqueryfun')
$('#questions').addClass('jqueryser')
});

/* These functions are just meant to replace different classes with fun ones to vary a bacground with different fun elements*/

var bage = document.getElementById("qandabut");
bage.onclick = baget;

function answer( response ) {
if(response==22){return"You're right! I'm 22"}
else{return "Try Again "}
}

function baget (){
var response = parseInt(document.getElementById("age").value);
var final = answer( response );

var fin = document.getElementById("answer");
fin.innerHTML = final
}

/*used a class mate's fiddle to help me learn vars and q and as https://jsfiddle.net/nicholascowan17/zdLyxe9a/ big shout out to the code done there helped me figure out some javascript things*/
