// Send a message to the main thread
self.postMessage("Hello from worker!");

// Listen for messages from the main thread
self.on("message", (message) => {
  console.log("Received from main thread:", message);
  // Sending a response back to the main thread
  self.postMessage("Worker received the message");
});
