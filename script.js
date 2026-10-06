document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // GET ELEMENTS
    // =========================

    const signinModal = document.getElementById("signinModal");
    const reviewModal = document.getElementById("reviewModal");

    const signInButton =
        document.getElementById("signInButton");

    const reviewsButton =
        document.getElementById("reviewsButton");

    const writeReviewButton =
        document.getElementById("writeReviewButton");

    const signinForm =
        document.getElementById("signinForm");

    const reviewForm =
        document.getElementById("reviewForm");


    // =========================
    // OPEN SIGN IN
    // =========================

    if (signInButton) {

        signInButton.addEventListener("click", function () {

            signinModal.classList.add("active");

        });

    }


    // =========================
    // OPEN REVIEWS
    // =========================

    if (reviewsButton) {

        reviewsButton.addEventListener("click", function () {

            document.getElementById("reviews").scrollIntoView({
                behavior: "smooth"
            });

        });

    }


    // =========================
    // OPEN REVIEW FORM
    // =========================

    if (writeReviewButton) {

        writeReviewButton.addEventListener("click", function () {

            reviewModal.classList.add("active");

        });

    }


    // =========================
    // CLOSE BUTTONS
    // =========================

    const closeButtons =
        document.querySelectorAll(".close-btn");

    closeButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            signinModal.classList.remove("active");
            reviewModal.classList.remove("active");

        });

    });


    // =========================
    // CLICK OUTSIDE MODAL
    // =========================

    window.addEventListener("click", function (event) {

        if (event.target === signinModal) {

            signinModal.classList.remove("active");

        }

        if (event.target === reviewModal) {

            reviewModal.classList.remove("active");

        }

    });


    // =========================
    // SIGN IN
    // =========================

    if (signinForm) {

        signinForm.addEventListener("submit", function (event) {

            event.preventDefault();

            alert("Welcome back to Crumb & Co.! ♡");

            signinModal.classList.remove("active");

            signinForm.reset();

        });

    }


    // =========================
    // REVIEW
    // =========================

    if (reviewForm) {

        reviewForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("reviewName").value;

            alert(
                "Thank you, " +
                name +
                "! Your review has been submitted ♡"
            );

            reviewModal.classList.remove("active");

            reviewForm.reset();

        });

    }

});