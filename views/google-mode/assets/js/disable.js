const disableGoogleMode = document.querySelector("#disableGoogleMode");

function disable() {
    localStorage.removeItem("gfap");
    window.location.href = "https://enioaiello-archives.github.io/admin-services-legacy";
}

disableGoogleMode.addEventListener("click", disable);