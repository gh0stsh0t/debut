
var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
    {
        path: '/guests/',
        url: 'guests.html',
    },
    {
        path: '/events/',
        url: 'events.html',
    },
    {
        path: '/dinner/',
        url: 'dinner.html',
    },
    {
      path: '/developers/',
      url: 'developers.html',
    },
    {
      path: '/',
      url: 'index.html',
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');
var guestsView = app.views.create('.view-guests');
var eventsView = app.views.create('.view-events');
var dinnerView = app.views.create('.view-dinner');
var developersView = app.views.create('.view-developers');
