import "ckeditor5/ckeditor5.css";
import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

import {
  ClassicEditor,
  Essentials,
  Bold,
  Italic,
  Font,
  Paragraph,
  Heading,
} from "ckeditor5";

ClassicEditor.create(document.querySelector("#editor"), {
  plugins: [Essentials, Bold, Italic, Font, Paragraph, Heading],
  toolbar: {
    items: [
      "undo",
      "redo",
      "|",
      "heading",
      "|",
      "bold",
      "italic",
      "|",
      "link",
      "fontSize",
      "fontFamily",
      "fontColor",
      "fontBackgroundColor",
    ],
  },
})
  .then((item) => {
    const ckEditor = document.querySelector(".ck-editor");
    const replyBtn = document.querySelector("[data-reply-btn]");
    const teacherReply = document.querySelector("[data-teacher-reply]");
    const markBtn = document.querySelector("[data-mark-btn]");
    const closeBtn = document.querySelector("[data-close-btn]");
    ckEditor.classList.add("d-none");

    const toggleStatus = (e) => {
      e.preventDefault();
      ckEditor.classList.toggle("d-none");
      teacherReply.classList.toggle("d-none");
      markBtn.classList.toggle("d-none");
      closeBtn.classList.toggle("d-none");
    };

    replyBtn.addEventListener("click", toggleStatus);
    closeBtn.addEventListener("click", toggleStatus);
  })
  .catch(/* ... */);
