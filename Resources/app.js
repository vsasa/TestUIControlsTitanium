Ti.include('math.js');

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#fff');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#000'
});

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'UI kontrole',        
    font:{fontSize:25,fontFamily:'Helvetica Neue'},
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'Rezultat: ',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	bottom:'auto',
	width:'auto'
});

var text1 = Titanium.UI.createTextField({
	color:'#336699',
    height:60,
    top:10,
    left:10,
    width:250,
    font:{fontSize:20,fontFamily:'Helvetica Neue'},
    keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD
    //borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var text2 = Titanium.UI.createTextField({
	color:'#336699',
    height:60,
    top:70,
    left:10,
    width:250,
    font:{fontSize:20,fontFamily:'Helvetica Neue'},
    keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD
    //borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});


text1.addEventListener('return', function()
{
  text1.blur();
  text2.focus();
});

text2.addEventListener('return', function()
{
  text2.blur();
});



var btn1 = Titanium.UI.createButton({
	title:'Saberi',
	color:'white',
	backgroundColor:'black',
	borderRadius:10,
	borderColor:'white',
	borderWidth:2,
    width:200,
    height:60,
    left:20
});

var result = 0.0;

btn1.addEventListener('click',function(e)
{
	
	result = saberi(text1.value, text2.value);
    alert('Rezultat je: ' + String(result));	
	label1.text = "Zadnji rezultat je: " + String(result);
	
});

win1.add(label1);
win1.add(text1);
win1.add(text2);
win1.add(btn1);


//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    url:'database.js',
    title:'Database',
    backgroundColor:'#000'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    font:{fontSize:25,fontFamily:'Helvetica Neue'},
    title:'DB test',
    window:win2
});


var win3 = Titanium.UI.createWindow({  
    title:'Tab 3',
    backgroundColor:'#000'
});

var web = Titanium.UI.createWebView({
	url:'index.html'
});

win3.add(web);

var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'test HTML',        
    font:{fontSize:25,fontFamily:'Helvetica Neue'},
    window:win3
});


var win4 = Titanium.UI.createWindow({  
    url:'grid.js',
    title:'Database',
    backgroundColor:'#000'
});


var tab4 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'test grid',        
    font:{fontSize:25,fontFamily:'Helvetica Neue'},
    window:win4
});

var win5 = Titanium.UI.createWindow({  
    url:'login.js',
    tabBarHidden:true,
    title:'Login form'
});


var tab5 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'login',        
    font:{fontSize:25,fontFamily:'Helvetica Neue'},
    window:win5
});


//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);
tabGroup.addTab(tab4);
tabGroup.addTab(tab5);


// open tab group
tabGroup.open();
