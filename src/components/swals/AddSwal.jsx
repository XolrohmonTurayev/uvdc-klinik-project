import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import publicAxios from "../../api";

const AddSwal = withReactContent(Swal);

const showAddSwal = (link, newFile, back) => {
  // Show loading SweetAlert
  let timerInterval;
  Swal.fire({
    title: "Xabar yuborilmoqda...",
    html: "Iltimos kuting...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  // API chaqiruvi orqali faylni qo'shish
  publicAxios
    .post(`${link}`, newFile)
    .then((data) => {
      Swal.fire({
        title: "Yuborildi!",
        text: "Xabar muvaffaqiyatli qo'shildi.",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then(() => {
        back()
      });
    })
    .catch((error) => {
      console.log(error.message);
      Swal.fire("Xatolik", "So'rov yuborishda xatolik yuz berdi.", "error");
    });
};

export default showAddSwal;
