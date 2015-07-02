arel.sceneReady(function()
{
	//Just for Debuging purposes
	//arel.Debug.activate();
	//arel.Debug.deactivateArelLogStream();
	
	//Create the ammunition display
	
});

var i = 0;
//This function will be triggered if the user is pressing the Shoot Button
function shoot()
{

//alert("stamp");
//document.write('<img src="bullet.png" width="104" height="291" />');
if(i%2==0){
document.kuji.src = "bullet.png"; 
}else{
document.kuji.src = "aaa.png"; 
alert("test");
}
i++;
//document.write('<a href="#" class="Button" onclick="close()">隠す</a>');

//arel.Events.setListener(metaioman, function(obj, type, params){handleMetaioManEvents(obj, type, params);});
//obj.startAnimation("close_down");

};

function close(){

	location.href = "/index.html";
}
