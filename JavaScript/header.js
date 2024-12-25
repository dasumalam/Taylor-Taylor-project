let nav = document.getElementsByTagName("nav")[0];
let sidebar = document.getElementById("sidebar");

sidebar.addEventListener("click", () => {
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
    nav.classList.add("flex", "flex-col", "top-16", "absolute", "gap-2", "z-30", "right-[3%]", "bg-[#af8f579f]", "py-3","px-5");
  } else {
    nav.classList.add("hidden");
    nav.classList.remove("flex", "flex-col", "top-16", "absolute", "gap-2", "z-30", "right-[3%]", "bg-[#af8f579f]", "py-3", "px-5");
  }
});
