# Task

Make a web application based on the [authors.json](authors.json) file. The application should at a minumum have the following things:

- A way to seed the service (whether via a database, file, or in-memory) with a data file that has the same structure like the authors file. This can be an API enpoint, a batch loader, whatever, as long as it gets the job done. It should replace any already existing data with the newly provided data.
- An endpoint that will return a full or partial list of authors. The list should be constrained by a  fragment of the authors name, i.e. "all the authors with 'ART' in their name". The response should NOT include the author's book, but MUST include the total number of books by that author. Paging the result set is optional.
- An endpoint that will return a single author, given an ID. All the author data should be returned, including all the books written by the author
- An endpoint that will return a partial list of books. The list should be constrained by a fragment of the title, i.e. "all the books with 'dragon' in their title". The response should include the author's name for each book.
- An endpoint that will return a full list of books for a particular series, i.e. "all the 'Harry Potter' books". The response should include the author's name as well.
- Frontend that will enable the user to interact with the enpoints.

The choice of database, frontend and backend framework is up to the candidate, unless previously agreed otherwise.