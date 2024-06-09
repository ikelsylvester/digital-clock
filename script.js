function updateTime() {
    const now = new Date(); // Create a new Date object representing the current date and time

    // Extract date components
    const weekday = now.toLocaleDateString('en-US', { weekday: 'long' });
    const month = now.toLocaleDateString('en-US', { month: 'long' });
    const day = now.getDate();
    const year = now.getFullYear();

    // Format time components
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12 for AM/PM display

    // Update the DOM elements
    document.getElementById('date').textContent = `${weekday}, ${month} ${day}, ${year}`;
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

// Initial call to updateTime to display the current date and time
updateTime();

// Set up an interval to update the time every second
setInterval(updateTime, 1000);
