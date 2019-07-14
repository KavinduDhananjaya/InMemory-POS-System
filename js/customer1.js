var index, tbl = document.getElementById("table-1");

function addCustomerTable() {


    var tbl1 = document.getElementById("table-1");
    var raw = tbl1.insertRow();
    var cell1 = raw.insertCell(0);
    var cell2 = raw.insertCell(1);
    var cell3 = raw.insertCell(2);
    var cell4 = raw.insertCell(3);
    var cell5 = raw.insertCell(4);
    var cell6 = raw.insertCell(5);


    var cid = document.getElementById("txtId").value;
    var name = document.getElementById("txtFName").value;
    var address = document.getElementById("txtAddress").value;
    var email = document.getElementById("txtEmail").value;
    var tell = document.getElementById("txtTell").value;


    cell1.innerHTML = '<div class="ui fitted checkbox">\n' +
        '        <input type="checkbox"> <label></label>\n' +
        '        </div>';
    cell2.innerHTML = cid;
    cell3.innerHTML = name;
    cell4.innerHTML = address;
    cell5.innerHTML = email;
    cell6.innerHTML = tell;

    select()

}


function select() {


    for (var i = 1; i < tbl.rows.length; i++) {

        tbl.rows[i].onclick = function () {
            index = this.rowIndex;
            document.getElementById("txtId").value = this.cells[2].innerHTML;
            document.getElementById("txtFName").value = this.cells[1].innerHTML;
            document.getElementById("txtAddress").value = this.cells[3].innerHTML;
            document.getElementById("txtEmail").value = this.cells[4].innerHTML;
            document.getElementById("txtTell").value = this.cells[5].innerHTML;


        }

    }
    select();


}

function update() {


    var cid = document.getElementById("txtId").value,
        name = document.getElementById("txtFName").value,
        address = document.getElementById("txtAddress").value,
        email = document.getElementById("txtEmail").value,
        tell = document.getElementById("txtTell").value;

    tbl.rows[index].cells[2].innerHTML = cid;
    tbl.rows[index].cells[1].innerHTML = name;
    tbl.rows[index].cells[3].innerHTML = address;
    tbl.rows[index].cells[4].innerHTML = email;
    tbl.rows[index].cells[5].innerHTML = tell;

}

function remove() {
    tbl.deleteRow(index);
    confirm("Are you sure to delete this record");

}