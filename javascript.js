function openTab(evt, tabName) {
document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
document.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));
document.getElementById(tabName).classList.add("active");
evt.currentTarget.classList.add("active");
}