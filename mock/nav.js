'use strict';

class mynav extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {

        const sections = [
            {
                label: "Home",
                link: 'http://sangioacchinopartinico.it/index.html'
            },
            {
                label: "Parrocchia",
                link: 'http://sangioacchinopartinico.it/parrocchia.html',
                type: "dropdown",
                subsections: [
                        {
                            label: "Consiglio pastorale", 
                            link: "http://sangioacchinopartinico.it/consiglioPastorale.html"
                        },
                        {
                            label: "Consiglio per gli affari economici", 
                            link: "http://sangioacchinopartinico.it/consiglioAE.html"
                        }
                    ]
            },
            {
                label: "Orari delle Messe", 
                link: 'http://sangioacchinopartinico.it/orariMesse.html'
            },
            /*{
                label: "Ufficio Parrocchiale", 
                link: 'http://sangioacchinopartinico.it/up.html'
            },
            {
                type: "dropdown",
                label: "Sacramenti",
                link: 'http://sangioacchinopartinico.it/sacramenti.html',
                subsections: [
                    {
                        label: "Iniziazione cristiana: eucaristia e cresima (percorso ordinario)", 
                        link: 'https://sangioacchinopartinico.it/inizCristiana.html'
                    },
                    {
                        label: "Il Matrimonio", 
                        link: "https://sangioacchinopartinico.it/matrimonio.html"
                    }]
            },
            {
                type: "dropdown", 
                label: "Gruppi", 
                link: 'http://sangioacchinopartinico.it/gruppi.html',
                subsections: [
                    {
                        label: "Azione Cattolica", 
                        link: 'http://sangioacchinopartinico.it/azioneCattolica.html'
                    },
                    {
                        label: "Caritas", 
                        link:"http://sangioacchinopartinico.it/caritas.html"
                    }]
            },*/
            {
                label: "Coro", 
                link: 'http://sangioacchinopartinico.it/liturgia.html'
            },
            {
                label: "Dove siamo", 
                link: 'http://sangioacchinopartinico.it/doveSiamo.html'
            },/*
            {
                label: "Documenti", 
                link: 'http://sangioacchinopartinico.it/documenti.html'
            },*/
            {
                label: "Contatti", 
                link: 'http://sangioacchinopartinico.it/contatti.html'
            }]


        let div = document.getElementById('navbarNav')
        let myNav = document.createElement('elem')
        
        let ul = document.createElement('ul')
        ul.className = "navbar-nav"
        sections.forEach( x => {
            let section = document.createElement('li');
            section.classList.add('nav-item');
  
            if(x.type === 'dropdown'){
              section.classList.add('dropdown');
  
              let link = document.createElement('a');
              link.classList.add('nav-link', 'dropdown-toggle');
              link.id = 'sacramentiDropdown';
              link.role = "button"
              link.setAttribute('data-bs-toggle', "dropdown")
              link.setAttribute('aria-expanded', "false")
              link.innerHTML = x.label
  
              let subList = document.createElement('ul')
              subList.style = "margin-top: 8px";
              subList.classList.add("dropdown-menu", "dropdown-menu-lg-start")
              subList.setAttribute("aria-labelledby", "sacramentiDropdown")
  
              x.subsections.forEach( y => {
                let subSection = document.createElement('li');
                let subLink = document.createElement('a');
                subLink.classList.add('dropdown-item');
                subLink.href = y.link;
                var x = window.matchMedia("(max-width: 768px)")
                if(x.matches)
                  subLink.style = "white-space: normal";
                subLink.innerHTML = y.label;
                subSection.appendChild(subLink);
                subList.appendChild(subSection);
              });
              section.appendChild(link);
              section.appendChild(subList);
              ul.appendChild(section)
            } else {
                let link = document.createElement('a');
                link.classList.add('nav-link');
                link.href = x.link;
                link.innerHTML = x.label;
  
                section.appendChild(link);
                ul.appendChild(section);
            }
          });

        myNav.appendChild(ul)
        div.appendChild(myNav)
        this.appendChild(myNav);
    }
}

customElements.define("my-nav", mynav);
