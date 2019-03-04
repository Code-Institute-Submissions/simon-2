<H1>Simon Game</H1>

This is a simple web game based on the popular game simon, 
I wanted to make the site as simple as possible, whilst also fulfiling all the use cases I could think of for a
simon game.

<H2>UX</h2>
<ul>
<li>User Story: I am presented with a random colour sequence.</li>
<li>User Story: Each time I correctly match the sequence, I see the same sequence with an additional step.</li>
<li>User Story: I hear a sound that corresponds to each button both when the sequence plays, and when I  press a button.</li>
<li>User Story: If I press the wrong button, I am notified that I have done so, and that sequence starts again to remind me of the pattern so I can try again.</li>
<li>User Story: I can see what level the sequence is on.</li>
<li>User Story: If I want to restart, I can hit a button to do so, and the game will return to a single step.</li>
<li>User Story: I can play in strict mode where if I get the sequence wrong, it shows the error, plays a sound, and the game starts a new sequence.</li>
<li>User Story: I can win the game by getting to level 20. I am notified of my victory visually.</li>
</ul>

<a href="https://www.figma.com/file/f3LqiWh2yNpwli9On1VCGfbI/simon-wireframe?node-id=0%3A1" target="_blank">Original Figma Wireframe</a>


<h2> Features </h2>
<ul>
<li>Interactive simon game</li>
<li>Has twenty levels and two game modes: normal and strict.</li>
<li>The user cannot click the coloured pads before the game starts or during the games turn.</li>
</ul>

<h2>Technologies Used</h2>
<ul>
<li>Html 5</li>
<li>Css</li>
<li>Bootstrap</li>
<li>Javascript</li>
<li>JQuery</li>
<li>Jasmine</li>
</ul></li>
</ul>

<h2>Testing</h2>
I utilised jasmine testing on this project, you can run the tests using this link: <a href="https://dougd94.github.io/simon/jasmine.html" target="_blank">Run Jasmine Testing</a>
I tested two functions, My random number generator and my sequence check function.
<br>
I have tested this game website across different browsers and multiple mobile devices.
I gave the Github pages link to multiple people and had them go use the game to see if the UX and to check if there was any 
errors.
<ol>
<li>Sequence Checking:
<ol><li>Click start</li>
<li>Check that once the game sequence ends and the player enters their own, that it continues if correct or displays error when incorrect.</li>
<li>See if the audio and visual error plays during an incorrect use sequence entry.</li></ol></li>


<li>Media Queries:
<ol>
<li>Check in developer tools that all the relevant media queries are activating.</li>
<li>Check that site looks good on all common screen sizes.</li></ol></li>



<li>Strict Mode:
<ol><li>Click strict mode on.</li>
<li>Check that the light turns on when clicked.</li>
<li>Check to see that once an error is entered that the game goes back to level one with a new random sequence.</li></ol></li>
</ol>

<li>Errors:
<ol><li>The only error that remains is an "Uncaught TypeError: Cannot read property 'split' of undefined" that does not effect functionality at all,
<br>this seems to be linked to the toggle strict button that I used instead of the standard implimentation, as it ussually only happens if you toggle strict off after toggling it on, I fixed this by using a more normal strict mode implimentation,
<br>but chose to just leave it as it was for deployment because I liked the toggle button functionality and aesthetic.</li></ol>


<h2>Deployment</h2>
Site was created in the cloud9 IDE. Then it was published to github pages.
<a href="https://dougd94.github.io/simon/" target="_blank">Link to Github Pages</a> 


<h2>Credits</h2>
Content sound were got from these links: 
<br>
<a href="https://medium.com/@arecvlohe/lets-build-a-simon-game-in-reasonreact-pt-3-sounds-27349f7b7fab" target="_blank">Error</a>
<br>
<a href="https://gist.github.com/micahbales/32f2afe2f33bcbafca786387bd359cbc" target="_blank">The Colour Pads</a>


The game is based on the popular simon toy.
<a href="https://en.wikipedia.org/wiki/Simon_(game)" target="_blank">Simon</a>

I used the colour wheel to find complimenting colours
<a href="https://www.sessions.edu/color-calculator/" target="_blank">Colour Wheel</a>