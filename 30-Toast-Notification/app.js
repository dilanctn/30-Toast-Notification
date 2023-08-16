const notifContainer = document.querySelector(".notifContainer")
const button = document.getElementById("button")

const notifications = [
    "Instagram Bildirim",
    "Twitter Bildirim",
    "YouTube Bildirim",
    "Medium Bildirim",
    "LinkedIn Bildirim",
    "GitHub Bildirim",
]

const colors = ["red", "purple", "teal", "blue", "pink", "green"]

button.addEventListener("click", () => createNotification())

function createNotification() {
    const notifDiv = document.createElement("div")
    notifDiv.classList.add("notif")
    notifDiv.classList.add(getRandomColor())

    notifDiv.innerText = getRandomNotif()

    notifContainer.appendChild(notifDiv)

    setTimeout(() => {
        notifDiv.remove()
    }, 3000);
}

function getRandomNotif() {
    return notifications[Math.floor(Math.random() * notifications.length)]
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}