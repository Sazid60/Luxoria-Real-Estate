# **LUXORIA**

**Website URL:** [https://b9a9-sazid.web.app/](https://b9a9-sazid.web.app/)

#### Overview:
Luxoria specializes in residential property renting and selling, offering a wide range of single-family homes, townhouses, apartments, student housing, senior living communities and vacation rentals. This site is for all Devices

### Features & Characteristics:

- **Home Page:** Contains Navbar, Banner(AutoPlay Added), Properties Card, Property Locations, Reviews & Footer.

- **Register Page:** Register with email, password, photo URL, or Google & GitHub. Validates Password (6 characters, 1 uppercase, 1 lowercase). Redirects post-registration to the desired or home page.

- **Login Page:** Login with email, password or Google & GitHub. Redirects to the desired or home page. Allows navigation to Agents, Update Profile, and Property Details (Private Routes) after Login.

- **Navbar:** Navbar has active routes to navigate through pages. Displays User image & functional Logout button when logged in; otherwise, displays default blank user image, login, and register button.

- **Blogs Page:** Recent Blogs on Properties.
- **Contact Page:** Inquiry Form (non-dynamic) and FAQs. 

#### Private Routes: 
- **Agents Page:** Shows agents' information when logged in.(Private Route)
- **Update Profile Page:** When Logged in user can update Name & Photo URL information.(Private Route) 
- **Property Details Page:** Clicking "View Property" of property card redirects to details  if logged in; else, to login. after login navigates to desired page.

- **Warning** : If you Login with google, No password is set. So if you try to login manually using the same email, and password it will show error, since password is not set and no option is given for password setting.

### NPM Packages Used:

1. [AOS-Package](https://michalsnik.github.io/aos/) : Applied AOS in Every Pages of The Website.
2. [Swiper-slider](https://swiperjs.com/) : Applied In Home Page Banner Section.
3. [React-leaflet](https://react-leaflet.js.org/) : Applied In Home Page Property Location Section.

- **Extra Packages I have Used:** 
4. [React-helmet-async](https://www.npmjs.com/package/react-helmet-async) : Applied for Dynamic title.
5. [React-hot-toast](https://react-hot-toast.com/) : Used to show Login Register & Update.
6. [React-loader-spinner](https://www.npmjs.com/package/react-loader-spinner) : Applied in every loading state.
7. [react-type-animation](https://www.npmjs.com/package/react-type-animation) : Applied In Banner section.




