class Header extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id ="banner">
                <h1>Orawan Rabampho's Personal Portfolio</h1>
            </div>
            <div id="nav-container">
                <ul id="nav-list">
                    <li>
                    <a href="about.html">About Me</a>
                     </li>
                     <li>
                        <a href="resume.html">Resume</a>
                    </li>
                    <li>
                        <a href="api-unit-tests.html">API Unit Tests</a>
                    </li>
                    <li>
                        <a href="database-diagrams.html">Database Diagrams</a>
                    </li>
                    <li>
                        <a href="projects.html">Projects</a>
                    </li>
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                </ul>
            </div>        
        `;
    }
}

customElements.define("header-component", Header);