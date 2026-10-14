const form = document.getElementById("review-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const movieTitle = document.getElementById("movie").value;
    const movieRating = document.getElementById("rating").value;
    const movieReview = document.getElementById("review").value;

    
    const reviewCard = document.createElement("div");
    reviewCard.classList.add("review-card");

    reviewCard.innerHTML = `
  
        <p><b>${movieTitle}</b></p>
        <p>Rating: ${movieRating}</p>
        <p>Review: ${movieReview}</p>
        `;

    

        document.getElementById("reviews-container").appendChild(reviewCard);


});