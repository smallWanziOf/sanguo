loadChapter();
function loadChapter(){
	var uName={"uName":$("#user_name").val()}
	$.ajax({
		type:"POST",
       	data:uName,
        url:"./php/showChapter.php",
        success:function(e){
        	var data = JSON.parse(e);
        	var strChapter='';
        	for(var i=0;i<data['chapter'].length;i++){
        		strChapter+="<li id="+data['chapter'][i].chapterid+">"+data['chapter'][i].chapterid+"</li>"
        	}
        	$("#show_all_chapter").html(strChapter)
        }
	})
}