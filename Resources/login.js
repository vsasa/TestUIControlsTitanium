var win = Titanium.UI.currentWindow;  
      
var username = Titanium.UI.createTextField({  
        color:'#336699',  
        top:20,  
        left:10,  
        width:300,  
        height:40,  
        hintText:'Username',  
        keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
        returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
        borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
});  
win.add(username);  
      
var password = Titanium.UI.createTextField({  
        color:'#336699',  
        top:70,  
        left:10,  
        width:300,  
        height:40,  
        hintText:'Password',  
        passwordMask:true,  
        keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
        returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
        borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
});  
win.add(password);  
      
var loginBtn = Titanium.UI.createButton({  
        title:'Login',  
        top:120,  
        width:90,  
        height:35,  
        borderRadius:1,  
        font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
});  
win.add(loginBtn);  

var login_json_str = '[{"name":"vsasa","pwd":"11"},{"name":"bjasko","pwd":"22"},{"name":"hernad","pwd":"33"}]';


loginBtn.addEventListener('click',function(e)  
{  
    if (username.value != '' && password.value != '')  
    {  
        var loginObj = JSON.parse( login_json_str );
        
        for(var i=0; i < loginObj.length; i++){
    	    
    	    if ( loginObj[i].name == username.value && loginObj[i].pwd == password.value) { 
    	    	alert("Login ok");
    	    	return;	  	
    	    };
    	};
    	alert("Username/Password not correct!");    	
    }  
    else  
    {  
        alert("Username/Password are required");  
    }  
});  
