// Date and time picker
let dateToday = new Date();

$(function () {
  $("#date_picker").dtpicker({ minDate: dateToday });
});
