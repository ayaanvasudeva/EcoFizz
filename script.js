console.clear()

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
	target: '#navbar'
});

let navLinks = document.querySelectorAll('a.nav-link'); 
let sections = document.querySelectorAll('.layer');
const backtop = document.getElementById("backtop");

let sectionData = Array.from(sections).map(section => {
    return {
        element: section,
        id: section.getAttribute('id')
    };
});

const firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]');
firstScrollSpyEl.addEventListener('activate.bs.scrollspy', (e) => {
    let activeSectionId = e.relatedTarget.getAttribute('href').substring(1);
    let activeSection = sectionData.find(section => section.id === activeSectionId);
    if (activeSection) {
        sectionData.forEach(section => section.element.classList.remove('active'));
        activeSection.element.classList.add('active');
    }
});

window.onscroll = function () {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		backtop.classList.add("show");
	} else {
		backtop.classList.remove("show");
		sectionData.forEach(section => section.element.classList.remove('active'));
	}
}