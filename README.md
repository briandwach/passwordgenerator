# Javascript: Password Generator

## The goal of this project was to create a secure, random password generator that demonstrates my current knowledge of javascript.  

I learned the following:
- How to declare and then reuse functions.
- How to alter variables with methods in order to manipulate data to fulfill the desired logic.
- Include substantial comments so a fellow coder can understand how the application is built. 
- The importance of using Chrome dev tools for troubleshooting and debugging. (This helped me understand what types my variables were as I manipulated them)
- I've begun to understand how it is helpful to look up methods and what is possible in my programming environment.  This was helpful for converting an array to string without commas for example.  


Takeaways:
- I struggled with the flow and logic of the application at first.  Because of this, my code is not as succinct as it could be. 
- Next time I would capture the criteria of the password as an object instead of many global variables.  I can then reference the criteria using dot notation.  For exampe: password.length or password.lowercase.
- Early in the project I was committed to having customized feedback when a user's input for prompts was the wrong syntax.  Due to this, my application has a lot of different functions.  Next time, I would try to do this with less code and call more functions for a different purpuse, sending them a variable and getting a value back in return.  For example, I have a lot of "if statements" to check for syntax.  I could of had each unique "if statement" exist as one function that I reference more often.  I've done this somewhat in the application, but could have expanded on it.

## Usage

The final website can be viewed here:
https://briandwach.github.io/passwordgenerator/

- To start the application, click the red generate password button at the bottom.  
- A window prompt will ask for you to provide input for password criteria.  The criteria includes length and what character types to include.  
- I encourage you to intentionally answer the prompts with improper syntax and observe how the prompts respond. 
- I also encourage you to cancel the prompts and observe how the placeholder text in the document object model reacts.
- You cannot proceed with generating a password until a length from 8-128 is chosen and you've said yes to at least one character type.
- Lastly, you can generate a new password without needing to refresh the page and there is no concern for errors.

The code repository can be accessed here:
https://github.com/briandwach/passwordgenerator/

![Landing view](./assets/images/mainview.png)  
![Criteria prompts](./assets/images/criterias.png)
![Mobile and password result](./assets/images/mobileview.png)

## Credits
index.html, styles.css, and script.js files originated from the class activities Northwestern University GitLab repository: NU-VIRT-FSF-PT-12-2023-U-LOLC

at the following private link:
https://git.bootcampcontent.com/Northwestern-University/NU-VIRT-FSF-PT-12-2023-U-LOLC/-/tree/main/03-JavaScript/02-Challenge?ref_type=heads
