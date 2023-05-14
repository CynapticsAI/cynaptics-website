# Handling The Website
1) The Blender Model is In public/Models
2) Images Are In public/Images
3) Videos Are In public/Vidoes
4) All The Pages Are in src/app
5) All The Components are in src/components
6) All The TypeScript Types Are in src/Types
## changing the Projects Page Data
1) Go to src/app/ProjectsPage/Projects
2) You Will Find an Array of objects
3) To Add a New Project => Create a New Object With A Unique ID
4) Fill in the Remaining details With Appropriate Values / Sentences
5) To Upload The Project Image => Go to public/images/Projects and upload the project image
6) VIP Note:- in the src/app/ProjectsPage/Projects u need to fill in the project_image

    do fill it in this way => 
    ```
    project_image:require("relative path/to/your/Project image")
    ```
    for eg:-
    ```
    project_image:require("../../../public/images/Projects/Project1.jpg")
    ```
    
7) Done Your Project Appears

## changing the Events Page Data
1) Go to src/app/EventsPage/Events
2) You Will Find an Array of objects
3) To Add a New Event => Create a New Object With A Unique ID
4) Fill in the Remaining details With Appropriate Values / Sentences
5) To Upload The Event Image => Go to public/images/Events and upload the Event image
6) VIP Note:- in the src/app/EventsPage/Events u need to fill in the project_image
    
    do fill it in this way 
    ```
    img:require("relative path/to/your/Event image")
    ```
    for eg:-
    ```  
    img:require("../../../public/images/Events/Event1.jpg")
    ```
7) Done Your Event Appears
## changing the Our Team Page Data
1) Go to src/app/OurTeamPage/TeamMembers
2) You Will Find an Array of objects
3) To Add a New Team Member => Create a New Object With A Unique ID
4) Fill in the Remaining details With Appropriate Values / Sentences
5) To Upload The Team Members Image => Go to public/images/Members and upload the image
6) VIP Note:- in the src/app/OurTeamPage/TeamMemnbers u need to fill in the image
    
    do fill it in this way 
    ```
    image:require("relative path/to/your/Event image")
    ```
    for eg:-
    ```  
    image:require("../../../public/images/Members/Member1.jpg")
    ```
7) Done Your Team Member Appears Appears

## To change the Video Description
1) Go To src/components/VideoPage
2) Check Each Div tags id
3) id of div tags described what that div is doing
4) for eg:-
    there is a div with id="description of quick draw video"
    which says that this div contains the description of the quick draw video

## To change The About Us Page Description
1) Go to src/app/AboutUsPage
2) You Can Modify the About Us Page There
```
NOTE :- REMEMBER DURING PRODUCTION DO HAVE A LOOK AT THE .ENV FILE THERE IS A VARIABLE CALLED SITE_URL WHICH HOLDS THE PRODUCTION SITE URL AND IT IS IMPORTANT BECAUSE IT CREATES THE SITEMAPS FOR THE WEBSITE
```