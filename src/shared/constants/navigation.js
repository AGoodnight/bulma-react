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
    myApps:{
      name: 'Your Apps',
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
