var win2 = Titanium.UI.currentWindow;
var _name = '';
var _koef = 0;
var _jmbg = '';

var db = Titanium.Database.open('bringout');
db.execute('CREATE TABLE IF NOT EXISTS bringout (id INTEGER PRIMARY KEY, name TEXT, jmbg TEXT, koef INT)');

//create data entry view
var pregled = Ti.UI.createView({
  backgroundColor:'#0060AA',
  width:'100%',
  height:50,
  top:0
});

var kontrola = Ti.UI.createView({
  width:270,
  height:'auto'
});

var btnSnimi = Titanium.UI.createButton({
	title:'Snimi',
	width:60,
	height:35,
	right:0,
	top:5,
	color:'red',
	backgroundColor:'white',
	enabled:false
});
kontrola.add(btnSnimi);


var tf_name = Titanium.UI.createTextField({
	width:200,
	height:35,
	left:0,
	top:5,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	autocorrect:false,
	hintText:'naziv...'
});

var tf_jmbg = Titanium.UI.createTextField({
	width:150,	
	height:35,
	left:0,
	top:50,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	autocorrect:false,
	hintText:'jmbg...'
});

var tf_koef = Titanium.UI.createTextField({
	width:100,
	height:35,
	right:0,
	top:50,	
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	autocorrect:false,
	hintText:'koef...'
});


tf_name.addEventListener('return', function() {
	tf_name.blur();
});

tf_jmbg.addEventListener('return', function() {
	tf_jmbg.blur();
});

tf_koef.addEventListener('return', function() {
	tf_koef.blur();
});


tf_name.addEventListener("change", function(e) {
  _name = e.value;
  if (_name == '') {
    btnSnimi.enabled = false;
  }
  else {
    btnSnimi.enabled = true;
  }
});

tf_jmbg.addEventListener("change", function(e) {
  _jmbg = e.value;
});

tf_koef.addEventListener("change", function(e) {
  _koef = e.value;
});


kontrola.add(tf_name);
kontrola.add(tf_jmbg);
kontrola.add(tf_koef);

pregled.add(kontrola);
win2.add(kontrola);

var podaci = [];

//Get data for tableview
var rows = db.execute('SELECT * FROM bringout');
while (rows.isValidRow()) {
  	podaci.push({ 
  		title: rows.fieldByName('name'), hasChild:true,
  		id: rows.fieldByName('id'), 
  		jmbg: rows.fieldByName('jmbg'), 
  		koef: rows.fieldByName('koef'), 
  		color:'green' 
  		});

	rows.next();
};
rows.close();

var pregled_tabele = Titanium.UI.createTableView({
	data:podaci,
	headerTitle:'pregled tabele',
	allowsSelection:true,
	top:90
});


pregled_tabele.addEventListener('click', function(e) {
	Titanium.UI.createAlertDialog({
		title:'DB Test',
		message:'Trenutni zapis: ' + e.rowData.id + ' - ' + e.rowData.title + ' - ' + e.rowData.jmbg + ' - ' + e.rowData.koef
	}).show();
});

Titanium.UI.currentWindow.add(pregled_tabele);

btnSnimi.addEventListener("click", function(e) {
  if (btnSnimi.enabled) {
    db.execute('INSERT INTO bringout (name, jmbg, koef) VALUES(?,?,?)', _name, _jmbg, _koef );
    var last = db.execute("SELECT * FROM bringout ORDER BY id DESC LIMIT 1");
    pregled_tabele.appendRow({
      title:last.fieldByName('name'),
      jmbg:last.fieldByName('jmbg'),
      koef:last.fieldByName('koef'),
      id:last.fieldByName('id')
    });
    
    last.close();
    
    _naziv = "";
    _jmbg = "";
    _koef = "";
    
    tf_name.value = "";
    tf_name.blur();

    tf_koef.value = "";
    tf_koef.blur();

    tf_jmbg.value = "";
    tf_jmbg.blur();

    
    btnSnimi.enabled = false;
  }
});


