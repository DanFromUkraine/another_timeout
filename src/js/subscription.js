import "../style/main.css"

console.log("this is mirror!!");

const my_p = document.querySelector(".subs-js");

const b_refs = {
    close: document.querySelector(".b_close"),
    agree: document.querySelector(".b_agree"),
}

let my_interval = setInterval(
    () => {
        my_p.classList.toggle("not-visible")
    }, 1000
);

b_refs.close.addEventListener("click", function() {
    my_interval = null;
    my_p.classList.add("not-visible")
});
b_refs.agree.addEventListener("click", function() {
    my_interval = null;
    my_p.classList.add("not-visible");
});