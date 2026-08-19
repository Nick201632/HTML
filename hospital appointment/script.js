console.log("ClinicApp started!");

const newAppointmentBtn = document.getElementById("newAppointmentBtn");
const appointmentForm = document.getElementById("appointmentForm");

newAppointmentBtn.addEventListener("click", function () {
    appointmentForm.style.display = "block";
});