$(document).ready(function(){
var array2 = ["courseware","info","forum","instructor"];
show1(array2);
function show1(array2)
{   
    $("div#content ol.course-tabs a").hide();
    var arr2 = $.map(array2,function(item){
        result="a[href$="+item+"]";
        //result="a[href*="+item+"]";
        $("div#content ol.course-tabs "+result).show();
    });
}
});