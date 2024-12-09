// Gym reviews data
const gymReviews = [
    {
        text: "The trainers are incredible! They helped me achieve my fitness goals in just 3 months.",
        author: "Alex Johnson",
    },
    {
        text: "Amazing facilities and a welcoming community. I always look forward to my workouts here.",
        author: "Jamie Lee",
    },
    {
        text: "This gym is spotless, well-equipped, and offers great value for money!",
        author: "Taylor Brown",
    },
    {
        text: "The variety of group classes keeps my routine exciting and fun. Highly recommend!",
        author: "Jordan White",
    },
    {
        text: "Friendly staff, top-notch equipment, and an atmosphere that motivates you to do your best.",
        author: "Morgan Green",
    },
];

// Initialize and rotate reviews
function initGymReviews() {
    const reviewContainer = document.getElementById("testimonialSlider");
    if (!reviewContainer) {
        console.error("Error: #testimonialSlider element not found");
        return;
    }

    let currentIndex = 0;

    // Function to display a review
    function displayReview(index) {
        const { text, author } = gymReviews[index];
        reviewContainer.innerHTML = `
            <div class="testimonial-card">
                <p class="testimonial-text">"${text}"</p>
                <p class="testimonial-author">- ${author}</p>
            </div>
        `;
    }

    // Display the first review initially
    displayReview(currentIndex);

    // Rotate reviews every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % gymReviews.length;
        displayReview(currentIndex);
    }, 5000);
}

// Call the function on DOMContentLoaded
document.addEventListener("DOMContentLoaded", initGymReviews);
