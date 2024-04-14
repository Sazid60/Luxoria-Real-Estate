# **LUXORIA**

**Website URL:** [https://b9a9-sazid.web.app/](https://b9a9-sazid.web.app/)

### Overview:
Luxoria specializes in residential property renting and selling, offering a wide range of single-family homes, townhouses, apartments, student housing, senior living communities and vacation rentals.

### Features & Characteristics:

- **Home Page:** Contains Navbar, Banner, Properties Card, Property Locations, Reviews & Footer.

- **Register Page:** 
  1. Register with email, password, photo URL, or Google & GitHub.
  2. Redirects post-registration to the desired page or home page.
  3. Validates Password (6 character, 1 upper cas and one lower case)
  4. Link to redirect to login page

- **Login Page:** 
  1. Login with email, password or Google & GitHub.
  2. Redirects to the desired page or home page.
  3. Link to redirect to register page
  4. Allows to Navigate to Agents and Update Profile page & Property Details(Private Routes) after Login

- **Navbar :** 
  1. Navbar has Navlinks to navigate throw pages
  2. Navbar Shows User image & a functional Logout button when logged in.
  3. Navbar Shows a default blank user image, login and register button when not logged in.

- **Blogs Page:** Recent Blogs on Properties.
- **Contact Page:** Inquiry Form (non-dynamic) and FAQs. 

#### Private Routes: 
- **Agents Page:** Shows agents' information when logged in.(Private Route)
- **Update Profile Page:** When Logged in user can update Name & Photo URL information.(Private Route) 
- **Property Details Page:**   
  1. Property Section Contains 6 cards 
  2. Clicking "View Property" redirects to details if logged in
  3. If not logged in, redirects to login; after login, navigates to desired page.


### NPM Packages Used:

1. [AOS-Package](https://michalsnik.github.io/aos/) : Applied AOS in Every Pages of The Website.
2. [Swiper-slider](https://swiperjs.com/) : Applied In Home Page Banner Section.
3. [React-leaflet](https://react-leaflet.js.org/) : Applied In Home Page Property Location Section.

- **Extra Packages I have Used:** 
4. [React-helmet-async](https://www.npmjs.com/package/react-helmet-async) : Applied for Dynamic title.
5. [React-hot-toast](https://react-hot-toast.com/) : Used to show Login Register & Update.
6. [React-loader-spinner](https://www.npmjs.com/package/react-loader-spinner) : Applied in every loading state.
7. [react-type-animation](https://www.npmjs.com/package/react-type-animation) : Applied In Banner section.




