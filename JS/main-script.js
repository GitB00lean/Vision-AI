// script.js
function loadVideo() {
    const link = document.getElementById('youtube-link').value;
    const videoId = extractVideoId(link);
    if (videoId) {
        const iframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        document.getElementById('video-container').innerHTML = iframe;
        fetchTranscript(videoId);
    }
}

function extractVideoId(url) {
    const regex = /[?&]v=([^&]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}
async function fetchTranscript(videoId) {
    // Replace this URL with the actual endpoint for your transcript service
    const response = await fetch(`https://your-transcript-service.com/api/transcript/${videoId}`);
    const data = await response.json();
    document.getElementById('transcript-container').innerText = data.transcript;
}
async function fetchChatResponse(question) {
    const response = await fetch('https://api.your-gemini-ai-service.com/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify({ question })
    });
    const data = await response.json();
    document.getElementById('chat-container').innerText = data.answer;
}

document.getElementById('chat-input').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const question = event.target.value;
        fetchChatResponse(question);
    }
});
