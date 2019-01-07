const NavigationStructure = {
  TITLE:'Capsule Corp',
  LOGO:'./assets/img/logo.jpg',
  ITEMS:{
    home:{
      exact: true,
      name: 'Home',
      path: '/',
      isPrivate:false
    },
    myWidgets:{
      name: 'My Widgets',
      path: '/widgets',
      isPrivate:true
    },
    myAccount:{
      name: 'Account',
      path: '/account',
      isPrivate:false
    }
  }
}

export { NavigationStructure }
