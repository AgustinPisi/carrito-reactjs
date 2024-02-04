import Swal from 'sweetalert2'


const SAlert = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    width: "310px",
    color: "#ffd900",
    background: "#1f2124",
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  export default SAlert;