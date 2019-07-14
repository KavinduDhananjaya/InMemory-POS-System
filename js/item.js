var index, tbl = document.getElementById("table-2");

function addItemTable() {


    var tbl2 = document.getElementById("table-2");
    var raw = tbl2.insertRow();
    var cell1 = raw.insertCell(0);
    var cell2 = raw.insertCell(1);
    var cell3 = raw.insertCell(2);
    var cell4 = raw.insertCell(3);
    var cell5 = raw.insertCell(4);


    var itmCode = document.getElementById("txtItmeCode").value;
    var itmName = document.getElementById("txtItemName").value;
    var price = document.getElementById("txtUnit").value;
    var qty = document.getElementById("txtQty").value;


    cell1.innerHTML = '<div class="ui fitted checkbox">\n' +
        '        <input type="checkbox"> <label></label>\n' +
        '        </div>';
    cell2.innerHTML = itmCode;
    cell3.innerHTML = itmName;
    cell4.innerHTML = price;
    cell5.innerHTML = qty;

    select()

}


function select() {


    for (var i = 1; i < tbl.rows.length; i++) {

        tbl.rows[i].onclick = function () {
            index = this.rowIndex;
            document.getElementById("txtItmeCode").value = this.cells[1].innerHTML;
            document.getElementById("txtItemName").value = this.cells[2].innerHTML;
            document.getElementById("txtUnit").value = this.cells[3].innerHTML;
            document.getElementById("txtQty").value = this.cells[4].innerHTML;


        }

    }
    select();


}

function update() {

    var itmCode = document.getElementById("txtItmeCode").value,
        itmName = document.getElementById("txtItemName").value,
        price = document.getElementById("txtUnit").value,
        qty = document.getElementById("txtQty").value;


    tbl.rows[index].cells[1].innerHTML = itmCode;
    tbl.rows[index].cells[2].innerHTML = itmName;
    tbl.rows[index].cells[3].innerHTML = price;
    tbl.rows[index].cells[4].innerHTML = qty;

}

function remove() {
    tbl.deleteRow(index);
    confirm("Are you sure to delete this record");

}