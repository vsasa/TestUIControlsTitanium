Ti.include('math.js');

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
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
    height:35,
    top:10,
    left:10,
    width:250,
    font:{fontSize:14,fontFamily:'Helvetica Neue'},
    keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var text2 = Titanium.UI.createTextField({
	color:'#336699',
    height:35,
    top:50,
    left:10,
    width:250,
    font:{fontSize:14,fontFamily:'Helvetica Neue'},
    keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});


text1.addEventListener('return', function()
{
  text2.focus();
});




var btn1 = Titanium.UI.createButton({
	title:'Saberi',
	color:'#fff',
    width:200,
    height:50,
    left:20
});

var result = 0.0;

btn1.addEventListener('click',function(e)
{
	
	result = saberi(text1.value, text2.value);
    //result = parseFloat(text1.value) + parseFloat(text2.value);
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
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
