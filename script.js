document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");
    const cards = document.querySelectorAll(".cert-card");
    const span = document.querySelector(".close");

    cards.forEach(card => {
        card.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.getAttribute("data-img");
            captionText.innerHTML = this.querySelector("h4").innerHTML;
        }
    });

    span.onclick = () => modal.style.display = "none";
    window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }
});