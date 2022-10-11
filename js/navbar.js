'use strict';

class mynavbar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        let myNavbar = document.createElement('nav')
        myNavbar.style = "background-color: #a3320b;"
        myNavbar.classList.add("navbar", "navbar-expand-lg", "navbar-dark", "w-100");
        myNavbar.ariaLabel = "myNavbar";

        var divTitle = document.createElement("div")
        divTitle.classList.add("d-block", "d-lg-none")
        var title = document.createElement('p')
        title.style = "color: white; font-family: bold"
        title.innerHTML = "Parrocchia S. Gioacchino"
        divTitle.appendChild(title)

        let containerFluid = document.createElement('div');
        containerFluid.classList.add("container-fluid");

        let button = document.createElement('button')
        button.classList.add("navbar-toggler")
        button.setAttribute('type', 'button');
        button.setAttribute('data-bs-toggle', 'collapse')
        button.setAttribute('data-bs-target', '#myNavbar')
        button.setAttribute('aria-controls', 'myNavbar')
        button.setAttribute('aria-expanded', 'false')
        button.setAttribute('aria-label', 'Toggle navigation')

        let icon = document.createElement('span');
        icon.classList.add('navbar-toggler-icon')

        let containerSections = document.createElement('div');
        containerSections.id = 'myNavbar'
        containerSections.classList.add("collapse", "navbar-collapse")

        let list = document.createElement('ul');
        list.classList.add("navbar-nav", "me-auto", "mb-2", "mb-lg-0")


        const sections = [
          {label: "Home",
           link: 'http://sangioacchinopartinico.it/index.html'},
          {type: "dropdown",
          label: "Parrocchia",
          link: 'http://sangioacchinopartinico.it/parrocchia.html',
          subsections: [
                        {label: "Consiglio pastorale", link: "http://sangioacchinopartinico.it/consiglioPastorale.html"},
                        {label: "Consiglio per gli affari economici", link: "http://sangioacchinopartinico.it/consiglioAE.html"}]},
          {label: "Orari delle Messe", link: 'http://sangioacchinopartinico.it/orariMesse.html'},
          {label: "Ufficio Parrocchiale", link: 'http://sangioacchinopartinico.it/up.html'},
          {type: "dropdown",
          label: "Sacramenti",
          link: 'http://sangioacchinopartinico.it/sacramenti.html',
          subsections: [{label: "Iniziazione cristiana: eucaristia e cresima (percorso ordinario)", link: 'https://sangioacchinopartinico.it/inizCristiana.html'},
                        {label: "Il Matrimonio", link: "https://sangioacchinopartinico.it/matrimonio.html"}]
          },
          {type: "dropdown", label: "Gruppi", link: 'http://sangioacchinopartinico.it/gruppi.html',
           subsections: [{label: "Azione Cattolica", link: 'http://sangioacchinopartinico.it/azioneCattolica.html'},
                         {label: "Caritas", link:"http://sangioacchinopartinico.it/caritas.html"},]
          },
          {label: "Coro", link: 'http://sangioacchinopartinico.it/liturgia.html'},
          {label: "Dove siamo", link: 'http://sangioacchinopartinico.it/doveSiamo.html'},
          {label: "Documenti", link: 'http://sangioacchinopartinico.it/documenti.html'},
          {label: "Contatti", link: 'http://sangioacchinopartinico.it/contatti.html'}]

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
            subList.style = "margin-top:8px";
            subList.classList.add("dropdown-menu", "dropdown-menu-lg-start")
            subList.setAttribute("aria-labelledby", "sacramentiDropdown")

            x.subsections.forEach( y => {
              let subSection = document.createElement('li');
              let subLink = document.createElement('a');

              if(y.label == "Consiglio pastorale" || y.label == "Consiglio per gli affari economici")
                subLink.classList.add('dropdown-item');
              else
                subLink.classList.add('dropdown-item', 'disabled');

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
            list.appendChild(section)
          } else {
              let link = document.createElement('a');
              if(x.label == "Orari delle Messe" || x.label == "Home" || x.label == "Coro" || x.label == "Dove siamo" || x.label == "Contatti" || x.label == "Documenti")
                link.classList.add('nav-link');
              else
                link.classList.add('nav-link', 'disabled');
              link.href = x.link;
              link.innerHTML = x.label;

              section.appendChild(link);
              list.appendChild(section);
          }
        });

        button.appendChild(icon)
        containerFluid.appendChild(button)

        myNavbar.appendChild(containerFluid)

        containerSections.appendChild(list);
        containerFluid.appendChild(containerSections);


        this.appendChild(myNavbar);
    }
}

customElements.define("my-navbar", mynavbar);
