// require([
//   "dijit/form/DropDownButton",
//   "dijit/DropDownMenu",
//   "dijit/MenuItem",
//   "dojo/dom",
//   "dojo/dom-construct",
//   "dojo/domReady!"
// ], function(DropDownButton, DropDownMenu, MenuItem, dom, domConstruct){
//   //create the dropdown menu
//     var aboutMenu=new DropDownMenu({
//       style: "display: none"
//     });
//     console.log("Menu created");
//     aboutMenu.addChild(new MenuItem({
//       label: "Biography",
//       onClick: function(){ alert("Biography clicked!");}
//     }));
//     console.log("Child added");

//     aboutMenu.startup();

//     var menuButton = new DropDownButton({
//       innerHTML: "Fart",
//       label: "Hello!",
//       name: "programmatic2",
//       dropDown: aboutMenu,
//       id: "testDropDown2",
//       class: "navBut"
//     }).startup();

//     dom.byId("navBar").appendChild(new DropDownButton({
//       innerHTML: "Test",
//       label: "Hello!",
//       name: "programmatic2",
//       dropDown: aboutMenu,
//       id: "angryFace",
//       class: "navBut",
//       onClick: function(){alert: ("Hellllllloooo")}
//     }).domNode);
// });