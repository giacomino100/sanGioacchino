'use strict';

class myHeader extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
      var div = document.createElement("div");
      var divSmall = document.createElement('div');

      div.classList.add("d-none", 'd-md-block');
      divSmall.classList.add('d-block', 'd-md-none')

      var header = document.createElement("div");
      var headerSmall = document.createElement('div');
      header.classList.add('d-flex', 'justify-content-between')

      var title = document.createElement("div");
      title.style = "padding:20px";
      title.innerHTML = '<div ><a style="text-decoration: none; color: black" href="https://sangioacchinopartinico.it/index.html"><h2>Parrocchia San Gioacchino</h2><h5>Partinico</h5></a></div>'

      var titleSmall = document.createElement("div");
      titleSmall.style = "padding: 10px";
      titleSmall.innerHTML = '<div class="d-block d-md-none text-center"><a style="text-decoration: none; color: black" href="https://sangioacchinopartinico.it/index.html"><h2>Parrocchia S. Gioacchino</h2><h5>Partinico</h5></a></div>'

      div.appendChild(header)
      divSmall.appendChild(headerSmall)

      header.appendChild(title);
      headerSmall.appendChild(titleSmall);

      var containerLogo = document.createElement("div");
      containerLogo.style = "text-align: center; margin-top: 3px";
      containerLogo.classList.add("d-none", "d-md-block", "col-2");

      var img = document.createElement("img");
      img.src = "./img/logoDiocesi.jpeg"
      img.style.width = '40%'

      var labelLogo = document.createElement("p");
      labelLogo.style = "font-style: italic; font-size: 12pt; margin: 0px"
      labelLogo.classList.add("d-none", "d-md-block");
      labelLogo.innerHTML = 'Diocesi di Monreale'

      containerLogo.appendChild(img);
      containerLogo.appendChild(labelLogo);

      header.appendChild(containerLogo);

      this.appendChild(div);
      this.appendChild(divSmall)
    }
}

customElements.define("my-header", myHeader);
