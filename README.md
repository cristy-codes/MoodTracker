--Readme document for Cristy Gonzales, cristyg@uci.edu, ID: 58284970

1. 25/25

10/10 A functional web app (10 point)
5/5 The ability to control the web app with basic gestures (5 points, 1 per gesture)
4/4  The ability to control the web app with custom gestures (4 points)
2/2 Following good principles of UI design (2 points)
2/2 Creating a compelling app (2 points)
2/2 A readme and demo video which explains how these features were implemented and their design rationale (2 point)


2. How long, in hours, did it take you to complete this assignment? 
    ~60 hours, maybe more.

3. Online resources:
    https://material.angular.io/guide/getting-started
    https://angular.io/guide/event-binding
    https://stackoverflow.com/questions/69135476/error-module-angular-material-has-no-exported-member
    https://angular.io/guide/event-binding
    https://ultimatecourses.com/blog/component-events-event-emitter-output-angular-2
    https://angular.io/api/core/EventEmitter
    https://coolors.co/palettes/popular
    https://getcssscan.com/css-box-shadow-examples
    https://angular.io/api/router/ActivatedRoute
    https://www.freecodecamp.org/news/javascript-debounce-example/
    https://angular.io/guide/ngmodules
    https://angular.io/api/common/NgFor
    https://angular.io/cli/generate
    https://css-tricks.com/snippets/css/a-guide-to-flexbox/
    https://angular.io/api/common/NgIf
    https://www.freecodecamp.org/news/how-to-format-dates-in-javascript/
    
4. Features Explained:
    Custom Features:
        One Open, One Closed Hand: Move log selector down
        One Pointing, One Closed Hand: Move log selector up

    Basic Features:
        Open two hands: Start mood log entry
        Two Hands Pointing: Delete log entry
        One open hand: Move mood selector to the right
        One closed hand: Move mood selector to the left
        Two closed hands: Selected mood is chosen and logged
        One Hand Pointing: Cancel choosing mood and go back home

5. Design:
    To start logging mood, the user is first instructed to use two hands open. Once the tracker reads 'two hands open', the app will navigate the user from the home page to the mood tracker page. 
    
    The user can the select one of ten different moods by using 'one open hand' to move the mood selector to the right, or using 'one closed hand' to move the mood selector to the left. I have implemented a debounce function to slow down the selector to not frustrate the user. 
    
    Once the user has selected a mood, the user can use 'two closed hands' to select and choose that mood. That mood will then be stored into local storage and will navigate the user back to the home page and populate the mood log. 
    
    If a user decides they do not want to track their mood whilst still on the mood page, the user can cancel and go back home by using 'one hand pointing'. 
    
    The user can see their mood log on the home page. These are all the moods that are saved onto local storage. If a user wants to delete an entry, the user can move the selector down by using 'One Open, One Closed Hand' or 'One Pointing, One Closed Hand' to move the mood selector up. 
    
    To delete an entry, the user will need to 'Two Hands Pointing', this will remove the selected entry from local storage. I have also implemented a debounce function as to not frustrate the user.