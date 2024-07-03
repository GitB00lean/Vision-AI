function showSidebar() {
    document.querySelector('.sidebar-container').style.display = 'block';
}  
// Function to load the YouTube video
function loadVideo(url) {
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.src = `https://www.youtube.com/embed/${url}?autoplay=1`;
}
// Handle form submission
const youtubeLinkForm = document.getElementById('youtube-link-form');
youtubeLinkForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const youtubeLink = document.getElementById('youtube-link').value;
    // Extract the video ID from the YouTube URL
    const videoId = youtubeLink.split('v=')[1].split('&')[0];
    loadVideo(videoId);
});