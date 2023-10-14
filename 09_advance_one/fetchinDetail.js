/*
In JavaScript, the "fetch" function is used to make network requests to retrieve data from a specified URL.
It is commonly used for making HTTP requests to fetch data from a server or an API. 
Fetch is a modern alternative to the older XMLHttpRequest (XHR) and is based on Promises, 
making it more efficient and easier to work with.

Here's a simple example of how to use the "fetch" function with a real-time code example
to make an HTTP GET request and handle the response:
*/

// Define the URL from which you want to fetch data
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Use the fetch function to make an HTTP GET request
fetch(apiUrl)
  .then(response => {
    // Check if the response status is OK (HTTP status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // Parse the response body as JSON
    return response.json();
  })
  .then(data => {
    // Handle the JSON data once it's fetched
    console.log('Fetched data:', data);
  })
  .catch(error => {
    // Handle any errors that may occur during the fetch
    console.error('Fetch error:', error);
  });



  /*

In the Above Example - 

We define the apiUrl, which is the URL from which we want to fetch data. 
In this case, we're using the JSONPlaceholder API, which provides dummy data for testing.

We use the fetch function to make an HTTP GET request to the specified URL. 
It returns a Promise that resolves to the response to that request.

We use the .then method to handle the response. 
In this case, we first check if the response status is OK (HTTP status code 200) using the response.ok property. 
If it's not OK, we throw an error.

If the response is OK, we use response.json() to parse the response body as JSON. 
This returns another Promise, which we handle in the next .then block.

Finally, we handle the JSON data in the second .then block and log it to the console. 
If any errors occur during the fetch, they are caught and handled in the .catch block.

This code demonstrates a basic example of using the "fetch" function to make an HTTP GET request and handle the response. 
You can customize it to suit your needs, such as making different types of requests (POST, PUT, DELETE) and working with different APIs.
  
  */