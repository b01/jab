# Program Execution Flow

1. Check to see if the requested bolierplate exists.
   a. Yes, proceed to download the boilerplate.
   b. No, display a message that the boilerplate could not be found and exit.
      i. This is not an error but an info status, the program should exit normally.
2. Download the (zipped) boilerplate and put it in a temporary location/cache.
   a. If an unrecoverable failure occurs, alert the user of what has happened and exit.
3. Extract the boilerplate to the boilerplate store.
   a. If an unrecoverable failure occurs, alert the user of what has happened and exit.
4. Copy the boilerplate to a temporary location to work on it.
   a. If an unrecoverable failure occurs, alert the user of what has happened and exit.
5. Perform neccessary operations to fill in all placeholders and change the boilerplate to an applicatin skeleton.
   a. If an unrecoverable failure occurs, alert the user of what has happened and exit.
6. Move the application skeletion to its requested destination.
   a. Present the user with a message that indicates operation completed and exit.
