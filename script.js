let currentPage = 1;
const totalPages = 85;

function startReading() {
    document.getElementById("cover").style.display = "none";
    document.getElementById("extra-content").style.display = "none";
    document.getElementById("reader").style.display = "flex";
    loadPage();
}

function loadPage() {
    const mangaPage = document.getElementById("manga-page");
    mangaPage.style.opacity = 0;
    setTimeout(() => {
        mangaPage.src = `images/page${currentPage}.png`;
        mangaPage.style.opacity = 1;
    }, 500);
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        loadPage();
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        loadPage();
    } else {
        document.getElementById("reader").style.display = "none";
        document.getElementById("cover").style.display = "flex";
        document.getElementById("extra-content").style.display = "block";
    }
}
