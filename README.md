REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR

COMPANY: CODTECH IT SOLUTIONS

NAME: ADITYA SINGH

INTERN ID: CT08DG601

DOMAIN: FULL STACK

DURATION: 8 WEEKS

MENTOR: NEELA SANTOSH

DISCRIPTION-
Task 3 involved the design and development of a real-time collaborative document editor, a project that integrates multiple technologies to provide seamless, instantaneous editing experiences across different users. This task required building both a backend server to manage data storage and synchronization, and a frontend client application to provide a user-friendly interface for editing text collaboratively. The central objective was to ensure that multiple team members could simultaneously access and modify the same document, with all changes reflected in real time without conflicts or loss of data.

The backend component was constructed using Node.js with the Express framework. This server handled the critical responsibilities of accepting, storing, and sharing document data. MongoDB, a NoSQL database, served as the persistent storage layer, retaining the document's state to ensure data durability and recovery across sessions. Mongoose, an Object Data Modeling (ODM) library for MongoDB in Node.js, was employed to define the document schema and facilitate interaction with the database. The schema was simple, focusing on a single document model containing the entire content as a string, which optimized for straightforward retrieval and update operations.

Crucially, real-time synchronization was enabled using Socket.IO, a library that enables bidirectional, event-based communication between the server and client. Setting up Socket.IO on the backend allowed the server to listen for changes from any connected client and broadcast these changes to all others instantly. This event-driven system ensured that as one user typed or modified the content, every other connected user saw these updates immediately. Additionally, Socket.IO was used to save the document continuously to the MongoDB backend to prevent data loss and maintain state consistency.

On the frontend, the editor was implemented using React.js, a widely-adopted JavaScript library for building user interfaces. The key focus of the frontend was simplicity and responsiveness, providing a text area where users could input and edit text. The editor communicated with the backend server via Axios for HTTP requests, fetching the initial content of the document when the application loaded, and Socket.IO for real-time, event-driven messaging to reflect ongoing changes. This hybrid approach ensured both persistent data retrieval and dynamic updating.

The frontend’s use of React hooks such as useEffect and useState allowed efficient management of lifecycle events and state. The useEffect hook ensured that WebSocket connections were established when the component mounted and properly cleaned up when unmounted, preventing resource leaks and duplicate event listeners. State management enabled the editor to both display current content and respond seamlessly to updates broadcast by other clients.

To test the solution, multiple browser windows or tabs could be opened simultaneously. As users typed into one editor instance, correlation of the shared document was instantly visible on the others, demonstrating real-time collaboration without conflicts. Refreshing a page would retrieve the most recent saved data from the backend, proving that changes were successfully persisted in MongoDB between sessions.

Overall, Task 3 showcased the integration of backend data management, real-time socket communications, and modern frontend UI development to build an effective collaborative editor. The project addressed key challenges such as concurrent data modification, live synchronization, and persistent storage, producing an application that embodied both usability and technical robustness. It provided a foundational platform upon which further functionality—such as user management, version control, or richer text formatting—could be built, establishing essential expertise in full-stack development involving real-time web applications.

OUTPUT-


<img width="1919" height="1079" alt="Image" src="https://github.com/user-attachments/assets/0424fa0c-74f4-42e0-b7ab-cdc1e5c4da1a" />
