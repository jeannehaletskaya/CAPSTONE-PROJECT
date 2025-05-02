document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.getElementById("searchIcon");
    const searchBarContainer = document.getElementById("searchBarContainer");
    const closeSearch = document.getElementById("closeSearch");

    // Показать строку поиска при нажатии на значок
    searchIcon.addEventListener("click", () => {
        searchBarContainer.style.display = "block";
    });

    // Закрыть строку поиска
    closeSearch.addEventListener("click", () => {
        searchBarContainer.style.display = "none";
    });
});
