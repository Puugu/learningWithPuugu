 require([
  "dijit/Menu",
  "dijit/MenuItem",
  "dijit/CheckedMenuItem",
  "dijit/MenuSeparator",
  "dijit/PopupMenuItem",

  "dojo/domReady!"
 ], function(Menu, MenuItem, CheckedMenuItem, MenuSeparator, PopupMenuItem){

  // Create Navigation Bar
  var projMenu = new Menu({
    targetNodeIds: ["projBut"] //menu appears when project button is clicked
  });
  projMenu.addChild(new MenuItem({
    label: "First Project",
    onClick: function(){alert("First Project was clicked")}
  }));
  // Submenu
  var specialProjMenu = new Menu();
  specialProjMenu.addChild(new MenuItem({
    label: "Special Project Description"
  }));
  specialProjMenu.addChild(new MenuItem({
    label: "Special Project Photos"
  }));
  projMenu.addChild(new PopupMenuItem({
    label: "Second Project",
    popup: specialProjMenu
  }));

  projMenu.startup();
})