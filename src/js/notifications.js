import "../style/main.css"
console.log("js-notify");

const NOTIFICATION_DELAY = 6000;

let timeout_id = null;
const notification_cont = document.querySelector(".js-alert");

notification_cont.addEventListener("click", onNotificationClick)

function onNotificationClick() {
    hideNotification();
    clearTimeout(timeout_id)
}
function showNotification() {
    notification_cont.classList.add("is-visible");
    notification_cont.classList.remove("not-visible");

    timeout_id = setTimeout((
       
    )=> {
        console.log("закриваю сповіщення");
        hideNotification();
    }, NOTIFICATION_DELAY)
}

showNotification()

function hideNotification() {
    notification_cont.classList.add("not-visible");
}

console.dir(notification_cont);