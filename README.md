# Project_6


Static Node.js and Express Site

This application is a portfolio site that uses Node.js, Express and Pug to render home, about, and project pages. information about me and some of my interests is displayed in the about page, as well as contact and social media information. This site allows users to view all of my projects on full stack javascript development, as well as my Github repositories and live demos of the applications .

This site runs in the Node.js environment and utilizes the Express framework to handle 'GET' requests for each of the site's page routes. It uses the Pug template framework to enable dynamic rendering of each page. The site stores information for each project in a data.json file, and then interpolates that information into the Pug files.The site also provides error handling by utilizing middleware that is designed to catch default 404 route errors; if a route is not found/does not exist, an error page is rendered to notify the user.

Style Changes - The following is a list of the CSS classes and properties that were changed to personalize the project:

Added a color change on h5 h5 { color:purple; }

Added chnage of font size and color on p p{ font-size: 17px; color:black; }

Added a change of backgroundColor on the class button .button { background-color: #6F9FD8; }

Added a change in class button hover backgroundColor .button:hover{ background-color:#B4B7BA ; }

Added a change in the color of anchor a{ color: whitesmoke; }

Added a .zoom class with padding and transition .zoom { padding: 50px; transition: transform .2s; /* Animation */ }

Added tranform to the zoom class hover .zoom:hover { transform: scale(1.5); }

Added a change on background and color of class portfolio-me .portfolio-me { background: rgb(248, 78, 63); color:rgb(56, 14, 14); }

Added a change in color and font-size of class .portfolio-me with element p .portfolio-me p{ font-size: 14px; color: rgb(19, 1, 1); }

Added a change in backgroundColor of the body body { background-color: #FE840E; }

Added a change in the color of h1 h1 { color:whitesmoke }

Added a change of the color in the class lead .lead { color:black; }v
