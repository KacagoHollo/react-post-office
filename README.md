# Post Office

## Story

The bureaucracy is always a pain in the back.
But without it, the life should be too fast and easy.

Imagine that you go to the post office and you get to a person without waiting 30 minutes...
You shouldn't have time to get annoyed or you shouldn't play the same dumb application that you use only when you are in the toilet.

For adding to the bureaucracy, you got a job offer that you need to create an application that helps file the mails in the post office.
The goal is to create as many input you can for a mail and send them to a server that you've created and that save the mail's information.

## What are you going to learn?

- Fetch API post process
- Using the React built files
- Managing GET, POST request in backend side

## Tasks

1. In most of the production, the team doesn't have enough resource to host 2 working applications - the frontend and backend - separately. It is much more optimised if the backend uses the built version of the frontend.
    - When we use the `npm start` command in the root folder, the application starts on only one port

2. Create a server that manages requests. It needs endpoints where it returns all the mails,  add a new mail to the list  and where we can query between mails.
    - When we send a get request to the endpoint ("/api/mails"), the server returns a JSON with a list of mails
    - When we send a post request to the endpoint ("/api/mails") with an `{ from: "Peter Jackson", to: "Marie Odalein", message: "I love you", reference: 256135 }` object in the request body, the server add the mail to the end of the list of mails
    - When we send a mail object with a reference number already existing in the list of mails, the server returns with a status code 400
    - When we send a get request to the endpoint("/api/mails/256135"), the server returns a JSON with the mail with the reference number `256135` (if it exists)

3. We need a UI to the post office workers. The idea is really simple: There are 3 menu, 1 for list all the mails, 1 for add a new mail and one for a search option where we can filter mails by the reference number.
    - There are 3 buttons in the landing page for `List mails`, `New mail` and `Search`
    - When we click on the `List mails` button, it lists all the mails in the system under the buttons
    - When we click on the `New mail` button, it shows a form with inputs for `Reference number`, `To`, `From`, `Message` and a `Send` button
    - When we click on the `Send` button, it sends the form inputs in the request body to the server
    - When we send a mail with a reference number already existing in the list of mails, the form warns us to change the reference number
    - When we click on the `Search` button, it shows an input field for `Reference number` and a `Search` button
    - The input field accepts only numbers
    - When we click on the `Search` button, it shows the mail with the reference number typed in the input field
    - If there is no result, it shows `No mails found`

## General requirements

None

## Hints

- The backend is not that difficult, use Node.js and Express.js to create a simple backend.
- The backend and the frontend are different section of the project. 
You have the **root** folder `post-office`. 
In this folder you have a `backend` and a `frontend` folder containing your codes. 
Create a package.json in the **root** folder where you define npm scripts to manage your application.
You can create as many scripts as you want to maintain the project as you wish. 
You can define a script in the `scripts` property of the package.json's object.
- If you build your react app, you can use the files generated from the script to use them on your backend.
You can serve those files and work with like a SPA. Whenever you want seeing your changes in frontend, you need to rebuild it.
- You don't need to save the mails into a file, it's fine if you keep them in an array server side. Just remember that the mails will disappear if you stop the server.

## Background materials

- <i class="far fa-exclamation"></i> [NPM scripts](https://krishankantsinghal.medium.com/scripting-inside-package-json-4b06bea74c0e)
- <i class="far fa-exclamation"></i> [Serving static files with Express](https://www.tutorialspoint.com/expressjs/expressjs_static_files.htm)
- <i class="far fa-exclamation"></i> [POST method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)
- <i class="far fa-exclamation"></i> [Fetch post](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- <i class="far fa-candy-cane"></i> [React Axios](https://github.com/axios/axios)
- <i class="far fa-book-open"></i> [POST in the RESTful way](https://restfulapi.net/http-methods/#post)
- <i class="far fa-book-open"></i> [Status codes and their meaning](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
