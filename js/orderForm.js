function addRawDataOrder() {

    var tbl = document.getElementById("table-3");
    var raw = tbl.insertRow();
    var cell1 = raw.insertCell(0);
    var cell2 = raw.insertCell(1);
    var cell3 = raw.insertCell(2);
    var cell4 = raw.insertCell(3);
    var cell5 = raw.insertCell(4);
    var cell6 = raw.insertCell(5);


    var itmCode=document.getElementById("code").value;
    var itmName=document.getElementById("txtItemname").value;
    var price=document.getElementById("txtPrice").value;
    var qty=document.getElementById("txtQuantity").value;
    var total=price*qty;




    cell1.innerHTML='<div class="ui fitted checkbox">\n' +
        '        <input type="checkbox"> <label></label>\n' +
        '        </div>';
    cell2.innerHTML=itmCode;
    cell3.innerHTML=itmName;
    cell4.innerHTML=price;
    cell5.innerHTML=qty;
    cell6.innerHTML=total;

}

// function item(code, name, price, qty) {
//     this.code=code;
//     this.name=name;
//     this.qty=qty;
//     this.price=price;
// }

//
// var items=[
//     new item("I001","Lux",45.00,50),
//     new item("I002","Anchor",350,100),
//     new item("I003","Sunlight",55.00,50),
//     new item("I004","Lux",55.00,100),
//     new item("I004","Lux",55.00,100)
// ];
//
//
// $(document).ready(function () {
//     for (var i = 0; i < items.length; i++) {
//         $("#itemCode").append("<option>" + items[i].code + "</option>");
//     }
//
//
//     $("#item").change(function () {
//         var x = $(this).val();
//         for (var i = 0; i < items.length; i++) {
//             if (items[i].code == x) {
//                 $('#txtItemname').val(items[i].name);
//                 $('#txtItmeCode').val(items[i].code);
//                 $('#txtPrice').val(items[i].price);
//                 $('#txtQuantity').val(items[i].qty);
//
//             }
//         }
//     });
// }