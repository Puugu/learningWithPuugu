require([
  "dijit/form/DropDownButton",
  "dijit/DropDownMenu",
  "dijit/MenuItem",
  "dojo/dom",
  "dojo/dom-construct",
  "dojo/domReady!"
], function(DropDownButton, DropDownMenu, MenuItem, dom, domConstruct){
  //create the dropdown menu
    var aboutMenu=new DropDownMenu({
      style: "display: none"
    });
    console.log("Menu created");
    aboutMenu.addChild(new MenuItem({
      label: "Biography",
      onClick: function(){ alert("Biography clicked!");}
    }));
    console.log("Child added");

    aboutMenu.startup();

    //create button for dropdown menu
    /*var menuButton = new DropDownButton({
      label: "Hello!",
      name: "programmatic2",
      dropDown: aboutMenu,
      id: "testDropDown"
    }).startup();*/

    var menuButton = new DropDownButton({
      innerHTML: "Fart",
      label: "Hello!",
      name: "programmatic2",
      dropDown: aboutMenu,
      id: "testDropDown2",
      class: "navBut"
    }).startup();

    dom.byId("navBar").appendChild(new DropDownButton({
      innerHTML: "Test",
      label: "Hello!",
      name: "programmatic2",
      dropDown: aboutMenu,
      id: "angryFace",
      class: "navBut",
      onClick: function(){alert: ("Hellllllloooo")}
    }).domNode);

    // domConstruct.create("button", {
    //   innerHTML: "Hi",
    //   dropDown: aboutMenu,
    //   id: "testDropDown",
    //   class: "navBut"
    // }, dom.byId("contactBut"), "after")
    //domConstruct.place(menuButton.domNode, dom.byId("projBut"), "before");
    //dom.byId("aboutBut").appendChild(menuButton.domNode);

    // domConstruct.create("DropDownButton", {
    //   innerHTML: "Bye",
    //   dropDown: aboutMenu,
    //   id: "testDropDown3",
    //   class: "navBut"
    // }, dom.byId("contactBut"), "after")

    // dom.byId("testDropDown").appendChild(new DropDownButton({
    //   innerHTML: "Farts",
    //   dropDown: aboutMenu,
    //   id: "testDropDown4",
    //   class: "navBut"
    // }).domNode);
});
// ---------------------------------------------------------------------------
//  require([
//   "dijit/Menu",
//   "dijit/MenuItem",
//   "dijit/CheckedMenuItem",
//   "dijit/MenuSeparator",
//   "dijit/PopupMenuItem",

//   "dojo/domReady!"
//  ], function(Menu, MenuItem, CheckedMenuItem, MenuSeparator, PopupMenuItem){

//   // Create Navigation Bar
//   var projMenu = new Menu({
//     targetNodeIds: ["projBut"] //menu appears when project button is clicked
//   });
//   projMenu.addChild(new MenuItem({
//     label: "First Project",
//     onClick: function(){alert("First Project was clicked")}
//   }));
//   // Submenu
//   var specialProjMenu = new Menu();
//   specialProjMenu.addChild(new MenuItem({
//     label: "Special Project Description"
//   }));
//   specialProjMenu.addChild(new MenuItem({
//     label: "Special Project Photos"
//   }));
//   projMenu.addChild(new PopupMenuItem({
//     label: "Second Project",
//     popup: specialProjMenu
//   }));

//   projMenu.startup();
// })
//-------------------------------------------------------------------
// require([
//     "dijit/Menu",
//     "dijit/MenuItem",
//     "dijit/CheckedMenuItem",
//     "dijit/MenuSeparator",
//     "dijit/PopupMenuItem",
//     "dojo/domReady!"
// ], function(Menu, MenuItem, CheckedMenuItem, MenuSeparator, PopupMenuItem){
//     var pMenu;
//     pMenu = new Menu({
//         targetNodeIds: ["aboutBut"] //right click about button to bring up the menu
//     });
//     pMenu.addChild(new MenuItem({
//         label: "Simple menu item"
//     }));
//     pMenu.addChild(new MenuItem({
//         label: "Disabled menu item",
//         disabled: true
//     }));
//     pMenu.addChild(new MenuItem({
//         label: "Menu Item With an icon",
//         iconClass: "dijitEditorIcon dijitEditorIconCut",
//         onClick: function(){alert('i was clicked')}
//     }));
//     pMenu.addChild(new CheckedMenuItem({
//         label: "checkable menu item"
//     }));
//     pMenu.addChild(new MenuSeparator());

//     var pSubMenu = new Menu();
//     pSubMenu.addChild(new MenuItem({
//         label: "Submenu item"
//     }));
//     pSubMenu.addChild(new MenuItem({
//         label: "Submenu item"
//     }));
//     pMenu.addChild(new PopupMenuItem({
//         label: "Submenu",
//         popup: pSubMenu
//     }));

//     pMenu.startup();
// });