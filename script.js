document.addEventListener("DOMContentLoaded", function () {
    let draggedElement = null;
    let imageBoxes = document.querySelectorAll(".image-box");

    imageBoxes.forEach(box => {
        box.addEventListener("dragstart", function () {
            draggedElement = this;
            setTimeout(() => (this.style.opacity = "0.5"), 0);
        });

        box.addEventListener("dragend", function () {
            setTimeout(() => (this.style.opacity = "1"), 0);
            draggedElement = null;
        });

        box.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        box.addEventListener("drop", function () {
            if (draggedElement !== this) {
                let tempBg = this.style.backgroundImage;
                this.style.backgroundImage = draggedElement.style.backgroundImage;
                draggedElement.style.backgroundImage = tempBg;
            }
        });
    });
});

