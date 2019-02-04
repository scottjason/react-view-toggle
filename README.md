
# React View Toggle

#### [View Live Demo](https://react-view-toggle.herokuapp.com/) 

### Built w/
- [Create React App, ES6, et al](https://github.com/facebook/create-react-app)
- [HOC Pattern for global state management](https://blog.kentcdodds.com/advanced-react-component-patterns-56af2b74bc5f)
- [Styled Components](https://github.com/styled-components/styled-components)
- [`react-lazy-load-image-component` to lazy load images](https://medium.com/@aljullu/an-easy-to-use-performant-solution-to-lazy-load-images-in-react-e6752071020c)
- Customized & programmatically-controlled use of [`react-slick`](https://github.com/akiran/react-slick) by Ken Wheeler (ported version of the [original slick](http://kenwheeler.github.io/slick/)) for the Carousel

---

### Installation

In the root directory:
```bash
$ npm install
```
then run
```bash
npm start
```
your browser should then automatically open `localhost:3000` (if not just enter `localhost:3000` in your browser)

---

### File Structure

**File structure inspired by [this](https://blog.bitsrc.io/structuring-a-react-project-a-definitive-guide-ac9a754df5eb) article.**

A route renders a `page`:

    .
    src/
      └── pages
      │   └── dashboard
      │   └── property-detail
      ├── components 
      ├── utils
      │   └── hocs
      ├── constants
      ├── api
      ├── assets
      │   └── images
      └──
    
  ---
  
### Summary

Generally speaking, this is a react app focused on unidirectional data flow, state management and UI. 

It fetches and renders a list of properties and the user can toggle between a card view and a list view. The user can also select a property and using react router, will be redirected to that property at its specific URL. Furthermore, the user can refresh the page on the property route due to the nature of way the app is built and how an HOC pattern is implemented, details below:

**HOC State Pattern w/ React Router**
State is shared throughout the different routes / pages without having to make any duplicate requests or unnecessary component renders via the HOC pattern used throughout the app.

On load, the client catches the route `/` and renders the dashboard page. The application itself is wrapped around an `HOC` called `withProperties`.

`withProperties` HOC fetches the data once and sets in state. This data then bubbles down to the children which react to and render any new props they're concerned with.

When the user selects a property and the app switches routes to the `property-detail/<id>` page, we still have all those properties and in this case we need them since when we arrive at the route we only have the property id via the url params. So we take that property id and map through the properties to find the match for the selected property.

That said, you can also load a `property-detail/<id>` page directly since the `withProperties` HOC will fetch onload, set state and update the children components- so same thing happens when you start at the dashboard and then navigate to a new property-detail page as when you just visit the property detail page directly- just the one api request per application load regardless of where you start.

**Image Lazy Loading**

Using the react-lazy-load-image-component package for scroll position and have also included my own placeholder image, which is purposely low-rez and blurry.

This placeholder image renders by default, then when the property images are fully requested and rendered a callback is invoked setting off a few functions that ultimately fade out the placeholder image and fade in the property image providing a more graceful UX than having the images awkwardly come together as they're rendered.

---

### Should look like this once loaded:

#### Card View
![enter image description here](https://raw.githubusercontent.com/scottjason/react-view-toggle/master/public/images/react-view-toggle-screenshot-1.png)

---

#### List View
![](https://raw.githubusercontent.com/scottjason/react-view-toggle/master/public/images/react-view-toggle-screenshot-2.png)

---

#### Property Carousel View
![enter image description here](https://raw.githubusercontent.com/scottjason/react-view-toggle/master/public/images/react-view-toggle-screenshot-3.png)