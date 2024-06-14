# Chat Application Using MERN Stack and Socket.io

## Overview

This chat application leverages the MERN stack (MongoDB, Express, React, Node.js) and Socket.io to provide a robust, real-time messaging platform. The application includes user authentication and will support both single and group chat functionalities.

## Features

### Current Features

1. **User Authentication:**

   - **Sign Up:** Users can create a new account by providing a username, email, and password. The data is stored securely in a MongoDB database.
   - **Login:** Existing users can log in using their email and password. Upon successful authentication, users are granted access to the chat functionalities.

2. **Routing:**
   - Simple and intuitive routes are set up for the Sign Up and Login pages, allowing for easy navigation within the application.

### Upcoming Features

1. **Single Chat:**

   - **Real-Time Messaging:** Using Socket.io, users will be able to send and receive messages in real time.
   - **Private Conversations:** Users can initiate private, one-on-one conversations with other users.
   - **Message Persistence:** Messages will be stored in MongoDB to ensure that users can view their chat history even after logging out.

2. **Group Chat:**
   - **Group Creation:** Users can create chat groups and add other users.
   - **Multi-User Conversations:** Messages sent in a group chat will be broadcast to all members of the group.
   - **Admin Controls:** Group creators will have admin privileges to manage group membership and settings.

## Technologies Used

- **Frontend: React**

  - **React Components:** Modular and reusable components for user interface elements.
  - **React Router:** For navigation between Sign Up, Login, and Chat pages.

- **Backend: Node.js & Express**

  - **Express Server:** Handles API requests and serves the React application.
  - **Authentication:** Secure user authentication using JSON Web Tokens (JWT).

- **Database: MongoDB**

  - **Mongoose:** For object data modeling to interact with MongoDB.
  - **User Schema:** Defines the structure for user data including encrypted passwords.

- **Real-Time Communication: Socket.io**
  - **WebSockets:** Enables real-time bidirectional communication between the client and server.
  - **Event Handling:** Custom events for sending and receiving messages, joining chat rooms, and more.
