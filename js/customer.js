
var rindex, table = document.getElementById("table-1");


function addRawData() {

    var tbl = document.getElementById("table-1");
    var raw = tbl.insertRow();
    var cell1 = raw.insertCell(0);
    var cell2 = raw.insertCell(1);
    var cell3 = raw.insertCell(2);
    var cell4 = raw.insertCell(3);
    var cell5 = raw.insertCell(4);
    var cell6 = raw.insertCell(5);


    var fname = document.getElementById("input").value;
    var id = document.getElementById("txtId").value;
    var address = document.getElementById("txtAddress").value;
    var email = document.getElementById("txtEmail").value;
    var tell = document.getElementById("txtTell").value;


    cell1.innerHTML = '<td class="collapsing">\n' +
        '        <div class="ui fitted checkbox">\n' +
        '        <input type="checkbox"> <label></label>\n' +
        '        </div>\n' +
        '        </td>'
    cell2.innerHTML = id;
    cell3.innerHTML = fname;
    cell4.innerHTML = address;
    cell5.innerHTML = email;
    cell6.innerHTML = tell;

    selectedRaw();

}


function selectedRaw() {


    for (var i = 1; i < table.rows.length; i++) {

        table.rows[i].onclick = function () {
            rindex = this.rowIndex;

            document.getElementById("txtFName").value = this.cells[2].innerHTML;
            document.getElementById("txtId").value = this.cells[1].innerHTML;
            document.getElementById("txtAddress").value = this.cells[3].innerHTML;
            document.getElementById("txtEmail").value = this.cells[4].innerHTML;
            document.getElementById("txtTell").value = this.cells[5].innerHTML;


        }

    }
    selectedRaw();
}


function editRaw() {

    var name = document.getElementById("txtFName").value,
        id=document.getElementById("txtId").value,
        address=document.getElementById("txtAddress").value,
        email=document.getElementById("txtEmail").value,
        tel=document.getElementById("txtTell").value;

        table.rows[rindex].cells[2].innerHTML = name;
        table.rows[rindex].cells[1].innerHTML = id;
        table.rows[rindex].cells[3].innerHTML = address;
        table.rows[rindex].cells[4].innerHTML = email;
        table.rows[rindex].cells[5].innerHTML = tel;

        alert("Updated Successfully")

}


function removeRaw() {

    table.deleteRow(rindex);
    confirm("Are you sure to delete this record");


}