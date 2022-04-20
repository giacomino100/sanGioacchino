function cerca1() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("ricerca");
  filter = input.value.toUpperCase();
  table = document.getElementById("tabella");
  tr = table.getElementsByTagName("tr");

  let numberNone = 0

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
        numberNone++;
      }
    }
  }

  if(numberNone+1 == tr.length){
      let ciao = document.createElement('p')
      ciao.innerHTML = tr.length
      table.appendChild(ciao)
  }

}
