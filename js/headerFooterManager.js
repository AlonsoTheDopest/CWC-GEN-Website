class HeaderTemplate extends HTMLElement {

	connectedCallback() {
		this.innerHTML = `
		<!-- Responsive navbar-->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="index.html">CWC Generator Project</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link" aria-current="page" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="project-description.html">Project Description</a></li>
						<li class="nav-item"><a class="nav-link" href="meet-the-team.html">Meet The Team</a></li>
                        <li class="nav-item"><a class="nav-link" href="gallery.html">Gallery</a></li>
						<li class="nav-item"><a class="nav-link" href="documents.html">Documents</a></li>
						<li class="nav-item"><a class="nav-link" href="support-us.html">Support Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Header - set the background image for the header in the line below-->
        <header class="py-5 bg-image-full" style="background-image: url('images/backgrounds/engineering-building.jpg')">
            <div class="text-center my-5">
                <img class="img-fluid rounded-circle mb-4" src="images/backgrounds/nau-logo.png" alt="..." />
                <h1 class="text-white fs-3 fw-bolder">CWC Generator</h1>
                <p class="text-white-50 mb-0">Welcome to the CWC Generator page!</p>
            </div>
        </header>
		`
	}

}

class FooterTemplate extends HTMLElement {

	connectedCallback() {
		this.innerHTML = `
		<!-- Footer-->
        <footer class="py-5 bg-dark">
            <div class="container">
                <p class="m-0 text-center text-white">Copyright &copy; NAU CWC Generator Team 2025</p>
                <p class="m-0 text-center text-white">Last Updated: Septemeber 12th, 2025</p>
            </div>
        </footer>
		`
	}
}

customElements.define('header-template', HeaderTemplate)
customElements.define('footer-template', FooterTemplate)