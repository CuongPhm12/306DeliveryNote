let elements_1 = $(".sum-1");
let elements_2 = $(".sum-2");
let elements_3 = $(".sum-3");
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

//Tính tổng số lượng cột MRP
for (let i = 0; i < elements_1.length; i++) {
  let a = elements_1[i].innerText;
  a = parseFloat(a);
  console.log(a, "xxx");
  sum1 += a;
}
//Tính tổng số lượng cột theo chứng thực
for (let i = 0; i < elements_2.length; i++) {
  let a = elements_2[i].innerText;
  a = parseFloat(a);
  sum2 += a;
}
//Tính tổng số lượng cột thực nhập
for (let i = 0; i < elements_3.length; i++) {
  let a = elements_3[i].innerText;
  a = parseFloat(a);
  sum3 += a;
}

$("#sum_1")[0].innerText = formatNumber(getNum(sum1));
$("#sum_2")[0].innerText = formatNumber(getNum(sum2));
$("#sum_3")[0].innerText = formatNumber(getNum(sum3));

//format định dạng số
function formatNumber(number) {
  // Chuyển số thành chuỗi
  let numStr = number.toString();

  // Tìm vị trí của dấu thập phân
  let decimalIndex = numStr.indexOf(".");

  // Nếu không có dấu thập phân, gán vị trí cuối cùng của chuỗi
  if (decimalIndex === -1) {
    decimalIndex = numStr.length;
  }

  // Duyệt qua chuỗi từ cuối về đầu và chèn dấu ',' sau mỗi ba chữ số
  for (let i = decimalIndex - 3; i > 0; i -= 3) {
    numStr = numStr.slice(0, i) + "," + numStr.slice(i);
  }

  // Trả về chuỗi đã định dạng
  return numStr;
}

function getNum(val) {
  if (isNaN(val)) {
    return 0;
  }
  return val;
}
