// fit tracker.js

// Select elements
const workoutForm = document.getElementById("logworkout");
const workoutList = document.getElementById("workout");
const darkModeToggle = document.getElementById("darkMOdeTOggle");

// Initialize an empty array to store workout data
let workouts = [];

// Event listener to handle form submission
workoutForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting and refreshing the page

    const workoutType = document.getElementById("workoutType").value;
    const duration = document.getElementById("duration").value;
    const sets = document.getElementById("number of sets").value;

    if (workoutType !== "choose your workout" && duration && sets) {
        // Create a workout object
        const newWorkout = {
            workoutType,
            duration,
            sets
        };

        // Add the new workout to the workouts array
        workouts.push(newWorkout);

        // Update the workout history UI
        displayWorkouts();

        // Reset form inputs
        workoutForm.reset();
    } else {
        alert("Please fill out all fields.");
    }
});

// Function to display workouts
function displayWorkouts() {
    workoutList.innerHTML = ""; // Clear existing list

    workouts.forEach((workout, index) => {
        const workoutDiv = document.createElement("div");

        workoutDiv.innerHTML = `
            <h3>Workout Type: ${workout.workoutType}</h3>
            <p>Duration: ${workout.duration} mins</p>
            <p>Sets: ${workout.sets}</p>
            <button onclick="deleteWorkout(${index})">Delete</button>
        `;

        workoutList.appendChild(workoutDiv);
    });
}

// Function to delete a workout
function deleteWorkout(index) {
    workouts.splice(index, 1); // Remove the workout from the array
    displayWorkouts(); // Re-render the list
}

// Dark Mode Toggle
darkModeToggle.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.innerHTML = "🌞"; // Change to sun icon
    } else {
        darkModeToggle.innerHTML = "🌙"; // Change to moon icon
    }
}

// CSS styles for dark mode
const darkModeStyles = `
    body.dark-mode {
        background-color: #333;
        color: white;
    }

    body.dark-mode header, body.dark-mode main, body.dark-mode #workout-form, body.dark-mode #workout-list {
        background-color: #444;
        color: white;
    }

    body.dark-mode button {
        color: black;
    }

    body.dark-mode button[type="submit"] {
        background: #218838;
    }

    body.dark-mode button[type="submit"]:hover {
        background: #28a745;
    }

    body.dark-mode #workout div {
        background: #555;
        color: white;
        border-left: 5px solid #28a745;
    }
`;

// Inject dark mode styles into the head section of the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = darkModeStyles;
document.head.appendChild(styleSheet);
