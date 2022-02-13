class Footer extends HTMLElement
{
    constructor(){
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="footer">
                <ul>
                    <li><a href="https://github.com/orabampho/web-330">My GitHub Repository</a></li>
                    <li><a href="https://github.com/buwebdev/web-330">Web 330: JavaScript II Course GitHub Repository</a></li>
                    <li><a href="https://www.youtube.com/c/bellevueuniversity">Bellevue University YouTube Channel</a></li>
                    <li><a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/">Bellevue University Web Development Degree</a></li>
                </ul>
                <hr />
                <p id="copyright">
                    Copyright &copy; 2022 Rabampho
                </p>
            </div>
            `;    
    }
}

customElements.define("footer-component", Footer);