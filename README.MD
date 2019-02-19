<H1>Simon Game</H1>

This is a simple web game based on the popular game simon, 
I wanted to make the site as simple as possible, whilst also fulfiling all the use cases I could think of for a
simon game.

<H2>UX</h2>
<il>
<li>As a user, I want to see a lot of information about the band on the homepage.</li>

<li>As a user, I should be able to book the band easily.</li>

<li>As a user, I want to be able to find out information about each band member and the band as a whole. </li>

<li>As a User, I want to listen to the bands music and watch music videos.</li>
</ul>

<a href="https://www.figma.com/file/f3LqiWh2yNpwli9On1VCGfbI/simon-wireframe?node-id=0%3A1">Original Figma Wireframe</a>


<h2> Features </h2>
<ul>
<li>Latest Release and Next Events on index - Allows users to watch latest music video and book tickets</li>
<li>Music - Allows users to stream to a few of the bands songs for free</li>
<li>The Band Page - Allows users to get information about the band</li>
<li>Gallery - Allows users to view pictures of the band</li>
<li>Booking Form - Allows users to book band fast and easily</li>
</ul>

<h2>Technologies Used</h2>
<ul>
<li>Html 5</li>
<li>Css</li>
<li>Bootstrap</li>
<li>Javascript</li>
<li>JQuery</li>
</ul></li>
</ul>

<h2>Testing</h2>
I have tested this website across different browsers and multiple mobile devices.
I gave the Github pages link to multiple people and had them go through the site to see if the UX and to check if there was any 
errors.
<ol>
<li>Footer:
<ol><li>Go to the Any page</li>
<li>Check in developer tools to see that the footer is sticking to the bottom.</li>
<li>Check to see that the footer content fits in all screen sizes and that media queries work.</li></ol></li>
I had a problem with the footer running up the page on "Booking" and "Gallery" This was fixed with giving the body a 
bottom padding equal to the footer size - this fix worked temporarily, and not perfectly on each size.
In order to fix it more fully I used Calc() to give each page 100%vh - footer, 
this worked more better, especially on Ipad pro which was the hardest size to fix.


<li>Media Queries:
<ol><li>Go to the Any page</li>
<li>Check in developer tools that all the relevant media queries are activating.</li>
<li>Check that site looks good on all common screen sizes.</li></ol></li>



<li>Booking form:
<ol><li>Go to the "Booking" page</li>
<li>Try to submit an empty form and see that an error message stating that there are required fields.</li>
<li>Try to submit the form with an invalid email address see that an error message appears.</li></ol></li>
</ol>



<h2>Deployment</h2>
Site was created in the cloud9 IDE. Then it was published to github pages.
<a href="https://dougd94.github.io/simon/">Link to Github Pages</a> 


<h2>Credits</h2>
Content
Sounds were got from these links: 
<a href="https://medium.com/@arecvlohe/lets-build-a-simon-game-in-reasonreact-pt-3-sounds-27349f7b7fab">Error</a>
<a href="https://gist.github.com/micahbales/32f2afe2f33bcbafca786387bd359cbc">The Colour Pads</a>


The Text for "Index" page was copied off of the following pages.
<a href="https://yulefestkilkenny.ie/">Yulefest</a>
<a href="http://durrowscarecrowfestival.com/">Scarecrow Festival</a>

The Text for the 'Footer' was copied off the following page.
<a href="https://www.biography.com/people/groups/the-monkees">Biography - The Monkees</a>

Images were downloaded off of google images.
Music and Video were taken off the code institute repository for this project.