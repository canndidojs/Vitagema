const select = document.querySelector(".select");
const options_list = document.querySelector(".options-list");
const options = document.querySelectorAll(".option");

select.addEventListener("click", () => {
  options_list.classList.toggle("active");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((option) => { option.classList.remove('selected') });
    select.querySelector("span").innerHTML = option.innerHTML;
    option.classList.add("selected");
    options_list.classList.toggle("active");
  });
});


const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const faq = button.nextElementSibling;

    faq.classList.toggle('show');
  })
})