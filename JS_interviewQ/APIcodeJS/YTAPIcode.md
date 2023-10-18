# How to fetch data from YouTube Data API in javascript , provide me complete source code .

To fetch data from the YouTube Data API in JavaScript, you need to use the API key and make an HTTP request to the YouTube API endpoint. Below is a complete source code example to fetch data about a YouTube video using the YouTube Data API. This example demonstrates how to retrieve the video details by providing the video's ID.

Here's the JavaScript code:

```html
<!DOCTYPE html>
<html>
<head>
    <title>YouTube Data API Example</title>
</head>
<body>
    <h1>YouTube Video Details</h1>
    <div id="video-details">
        <!-- Video details will be displayed here -->
    </div>

    <script>
        // Replace 'YOUR_API_KEY' with your actual YouTube Data API key
        const apiKey = 'YOUR_API_KEY';

        // Replace 'VIDEO_ID' with the ID of the video you want to retrieve details for
        const videoId = 'VIDEO_ID';

        // Create a function to fetch video details
        function fetchVideoDetails() {
            // Construct the URL for the YouTube Data API
            const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`;

            // Make an HTTP GET request to the API
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    // Handle the retrieved data
                    const videoDetails = data.items[0].snippet;
                    displayVideoDetails(videoDetails);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }

        // Create a function to display video details
        function displayVideoDetails(details) {
            const videoTitle = details.title;
            const videoDescription = details.description;
            const videoThumbnail = details.thumbnails.default.url;

            const videoDetailsElement = document.getElementById('video-details');
            videoDetailsElement.innerHTML = `
                <h2>${videoTitle}</h2>
                <p>${videoDescription}</p>
                <img src="${videoThumbnail}" alt="${videoTitle}" />
            `;
        }

        // Call the fetchVideoDetails function when the page loads
        fetchVideoDetails();
    </script>
</body>
</html>
```

Please make sure to replace `'YOUR_API_KEY'` with your actual YouTube Data API key and `'VIDEO_ID'` with the ID of the YouTube video for which you want to fetch details.

This code fetches the video's title, description, and default thumbnail and displays them on a web page. When you open the HTML file in a web browser, it will make an API request to retrieve the details of the specified video.