let leftContent = [`    <h3 onclick="switchLeft()"><u>La persistencia de sueño</u></h3>
                        <h5>Submission to Albricias Student Magazine &mdash; March, 2017</h5>
                        <h4></h4>
                        <p>
                            Anoche, era solo un soñador.<br>
                            Nada que hacía tenía significado,<br>
                            Pero lo que vi lo tenía.<br>
                            Pisé adelante de la oscuridad.
                        </p>
                        <p>
                            La escena estaba vacía, sin vida,<br>
                            salvo algunos objetos que habían quedado atrás.
                        </p>
                        <p>
                            A la izquierda, la mesa brilló<br>
                            con la luz del sol<br>
                            que relucía suavemente.
                        </p>
                        <p>
                            Un arbolito había crecido de la mesa,<br>
                            pero nada más.<br>
                            Había muerto hace tiempo.
                        </p>
                        <p>
                            A mi alrededor, había relojes.<br>
                            Ellos se cayeron de la nada.<br>
                            No funcionaron aquí.
                        </p>
                        <p>
                            Vacilé por un momento.<br>
                            Solamente duró un segundo<br>
                            y duró para siempre.
                        </p>
                        <p>
                            Continué adelante.<br>
                            No sabía dónde terminaba la tierra<br>
                            ni dónde empezaba el mar.
                        </p>
                        <p>
                            No podía quedarme para siempre.<br>
                            La escena se esfumó.<br>
                            Entonces, me desperté.
                        </p>
                        <p>
                            Ya no soy un soñador genuino.<br>
                            Lo que hago tiene significado,<br>
                            pero lo que veo me aburre.
                        </p>
                        <p>
                            Lamento la pérdida de mis sueños.<br>
                            Pero todavía puedo conectarme a ellos<br>
                            por la persistencia de sus memorias.
                        </p>
                    `,
                    `   <h3 onclick="switchLeft()"><u>La persistencia de sueño</u></h3>
                        <h5>Submission to Albricias Student Magazine &mdash; March, 2017</h5>
                        <h4></h4>
                        <h6>
                            At the end of his junior year of high school, Macey's Spanish teacher suggested that he apply to be featured
                            in Albricias, the student magazine published by the Sociedad Honoraria Hispánica. Though its readership is
                            mostly limited to Spanish teachers in the United States, he was honored to be selected for this edition of
                            the magazine. His submission is a poem about Salvador Dalí's "The Persistence of Memory," depicted below. The theme
                            of that month's edition of the magazine was Dalí and he wrote about one of Dalí's most famous works. The
                            poem is a first person account of what it would be like to wake up inside that painting.
                        </h6>
                        <img src="dali.jpg" style="width: 80%">
                    `];
let rightContent = [`   <h3 onclick="switchRight()"><u>Santeria</u></h3>
                        <h5>Arranged for A Cappella &mdash; April, 2020</h5>
                        <h4></h4>
                        <div class="pdf-viewer">
                            <img id="santeria" src="Santeria1.jpg">
                            <div class="pdf-buttons">
                                <button onclick="pageDown()">Prev</button>
                                <p id="page">Page 1</p>
                                <button onclick="pageUp()">Next</button>
                            </div>
                        </div>
                        <audio controls>
                            <source src="Santeria.mp3" type="audio/mpeg">
                            <source src="Santeria.wav" type="audio/wav">
                            <source src="Santeria.ogg" type="audio/ogg">
                        </audio>
                    `,
                    `   <h3 onclick="switchRight()"><u>Santeria</u></h3>
                        <h5>Arranged for A Cappella &mdash; April, 2020</h5>
                        <h4></h4>
                        <h6>
                            Arranging is a particularly fun activity. Though it is largely an exercise in transcribing what one hears to the
                            page, there is also a lot of room for creative liberties to be taken. This arrangement is of the song "Santeria"
                            by Sublime. Macey arranged the piece for a six-part a cappella group and a soloist. The original song, for those
                            who may be unfamiliar, is linked below.
                        </h6>
                        <iframe width="480" height="315" src="https://www.youtube.com/embed/AEYN5w4T_aM"></iframe>
                    `];
let left;
let right;
let pdfPage;

function displayPage() {
    document.getElementById("santeria").setAttribute("src", `Santeria${pdfPage}.jpg`);
    document.getElementById("page").innerHTML = `Page ${pdfPage}`;
}

function pageDown() {
    if (pdfPage != 1) pdfPage --;
    displayPage();
}

function pageUp() {
    if (pdfPage != 11) pdfPage ++;
    displayPage();
}

function init() {
    left = 0;
    right = 0;
    pdfPage = 1;
    displayPage();
    document.getElementById("left").innerHTML = leftContent[left];
    document.getElementById("right").innerHTML = rightContent[right];
}

function switchLeft() {
    left = (left + 1) % 2;
    document.getElementById("left").innerHTML = leftContent[left];
}

function switchRight() {
    right = (right + 1) % 2;
    document.getElementById("right").innerHTML = rightContent[right];
    pdfPage = 1;
}