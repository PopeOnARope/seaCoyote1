$(document).ready() 

$(".complete-purchase").click(function(){
		event.preventDefault;
	$(".customer-review").removeClass("hide");
})
 $('.complete-purchase').click(function(){
      var value = $('namepart').val();
   $('.newreview').append('<li>' + value + '</li>'); });

// function createnewreviewrecord(){

// 	var namepart = productreview.namepart.value;
// 	var commentpart = productreview.commentpart.value;
// 	var newreviewmarkup =+ "<h4> + namepart + </h4><li> + commentpart + </li>"
// 	var readyreview = productreview.newreviewmarkup.value 
// }

// $(".reviewer").click(function(){
// 	e.preventDefault;
// 	$(".pastreviews").append("newreviewmarkup");
// }


// // $("input:text name").val(function(){
// // 	return this.defaultValue;
// // });

