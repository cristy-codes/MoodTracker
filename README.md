   
Features Explained:
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

Design:
    To start logging mood, the user is first instructed to use two hands open. Once the tracker reads 'two hands open', the app will navigate the user from the home page to the mood tracker page. 
    
    The user can the select one of ten different moods by using 'one open hand' to move the mood selector to the right, or using 'one closed hand' to move the mood selector to the left. I have implemented a debounce function to slow down the selector to not frustrate the user. 
    
    Once the user has selected a mood, the user can use 'two closed hands' to select and choose that mood. That mood will then be stored into local storage and will navigate the user back to the home page and populate the mood log. 
    
    If a user decides they do not want to track their mood whilst still on the mood page, the user can cancel and go back home by using 'one hand pointing'. 
    
    The user can see their mood log on the home page. These are all the moods that are saved onto local storage. If a user wants to delete an entry, the user can move the selector down by using 'One Open, One Closed Hand' or 'One Pointing, One Closed Hand' to move the mood selector up. 
    
    To delete an entry, the user will need to 'Two Hands Pointing', this will remove the selected entry from local storage. I have also implemented a debounce function as to not frustrate the user.