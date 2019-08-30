SyMon HELPDESK ASSISTANT
=========================

SyMon is a script-bot designed to make your job easier here at the help 
desk. 

![SyMon](https://trello-attachments.s3.amazonaws.com/5b1306f4d11129badc44908f/600x450/461fd90a7180822e0108014a697c6c84/sym.png 
"Simon Head")

Primary Functions
-----------------

- abstracting menial tasks (extra copy&pasta, repetitive typing)

- providing an interactive hub of information (in progress)

![SyMon 
Future](https://trello-attachments.s3.amazonaws.com/5af9b61ed50e3e4a0307e804/5b1306f4d11129badc44908f/68a75eebc1ed27a20a7aed99db75406a/bannerSmoller.png 
"future")

-----------

INSTALLATION
============


You'll be installing the extension in Google Chrome using developer mode for the in-browser extension manager.

----

Get the files
------------

**STEP 1:**

![Instruction](https://raw.githubusercontent.com/yoh786/sYmon/Documentation/documentationAssets/1-1.png)

Navigate to Github link for repository. You'll be downloading a zip file, click the green button above files.

**STEP 2:**

![Instruction](https://raw.githubusercontent.com/yoh786/sYmon/Documentation/documentationAssets/1-2.png)


Download the file as a zip by clicking the link in this drop down. Save to a known location.


**STEP 3:**

![Instruction](https://raw.githubusercontent.com/yoh786/sYmon/Documentation/documentationAssets/1-3.png)


Go to the file location and unzip the folder. Right click and click 'Extract All'. Put somewhere safe from deletion.

----

Modify scripts to personalize
------------

**STEP 1:**

Go to where you unzipped the archive and then enter the main extension folder. 
Right click the file named "content.js"

**STEP 2:**

![Instruction](https://raw.githubusercontent.com/yoh786/sYmon/Documentation/documentationAssets/2-1.png)


Click "Open With..."


**STEP 3:**

![Instruction](https://raw.githubusercontent.com/yoh786/sYmon/Documentation/documentationAssets/2-2.png)


Click 'More Apps' in the modal that comes up. You should get a list where you can select Notepad. 

![Instruction](https://raw.githubusercontent.com/yoh786/sYmon/Documentation/documentationAssets/2-3.png)


*You'll just need to open it this one time, so you shouldn't need to change default program permanently.*


**STEP 4:**

![Instruction](https://raw.githubusercontent.com/yoh786/sYmon/Documentation/documentationAssets/2-4.png)


Modify the lines above for the *msg* javascript object. 
**NOTE: Changing anything except what is inside quotes will break the code**


For the message, you should change the default. I recommend using:

1. a unique last sentence (it's part of snip 3)
2. a personal closing (Kind regards, Have a good day, etc.)
3. your own name (modify 'agent' attribute)


----

Install the extension
------------

**STEP 1:**

![Instruction](https://raw.githubusercontent.com/yoh786/sYmon/Documentation/documentationAssets/3-1.png)


Open Google Chrome and access your extensions config page. To get there, just click the extensions link from the Chrome menu.

**STEP 2:**

![Instruction](https://raw.githubusercontent.com/yoh786/sYmon/Documentation/documentationAssets/3-2.png)


Flip this switch to turn on developer mode. Then click 'Load unpacked extension'

**STEP 3:**

![Instruction](https://raw.githubusercontent.com/yoh786/sYmon/Documentation/documentationAssets/3-3.png)


Navigate inside of the folder you unzipped to and then drill down until you see the chrome-extension folder. 
Select this folder with your mouse and then click button 'Select Folder' to load the extension in.

**STEP 4:**

![Instruction](https://raw.githubusercontent.com/yoh786/sYmon/Documentation/documentationAssets/3-4.png)


The extensions should show up in your list if successful. You're finished! 

![YuS](https://www.clareecho.ie/wp-content/uploads/2017/10/good-job-meme.jpg "Logo Title Text 1")


**STEP 5: You'll need this Bookmark**

Please add the below URL as a bookmark *(preferably on your bookmarks bar for quick access)*.
**You will need this link to open a New Ticket *without toolbars*; the extension does not work if you have a toolbar frame.**

[New Ticket - no toolbars](https://hfhs.service-now.com/incident.do?sys_id=-1&sysparm_stack=incident_list.do&sysparm_view=new_ticket&sysparm_query=active=true^EQ "New Ticket - without toolbars")

----------

How to use this extension:
======

This is a chrome extension that writes general response emails for you 
by extracting relevant data from your ticket. It does all the work with a background script and then copies the text to the system clipboard.
Once it is in the clip board it pastes like any other text.

**STEP 1**
*As mentioned above in installation, this only works on tickets with no toolbars.* Launch a new ticket with your special link, here it is again:
[New Ticket - no toolbars](https://hfhs.service-now.com/incident.do?sys_id=-1&sysparm_stack=incident_list.do&sysparm_view=new_ticket&sysparm_query=active=true^EQ "New Ticket - without toolbars")

Tip: add as a bookmark.

**STEP 2**
Complete your ticket fully and save the ticket. Technically you can run the extension without saving the ticket first, but it is better practice to save so you don't lose data.
![Instruction](https://raw.githubusercontent.com/yoh786/sYmon/Documentation/documentationAssets/use1.png)

**STEP 3**
Click the extension icon; alternatively you can press the keyboard shortcut *Ctrl - Shift - F*. 
Symon will give you a little red heart as a notification it ran. Your message has now been copied to the Windows clipboard. 
![Instruction](https://raw.githubusercontent.com/yoh786/sYmon/Documentation/documentationAssets/use2.png)

**STEP 4**
Paste the message in Openscape or wherever else you need it.
![Instruction](https://raw.githubusercontent.com/yoh786/sYmon/Documentation/documentationAssets/use3.png)


-------------


FAQ
=====

**1. Can you add {feature}?**

I would absolutely consider it. Let's talk about what it is and 
how it would work, and then we'll get cracking!


**2. This is really nice and all but... can we have a Help-Desk Puppy?**

Please direct all requests for mascot puppies to Melanie. 

**3. Why doesn't it work with toolbars?**

Not sure, curious thing is if you run the code from developer console it does work perfect. 
My guess is something to do with the DOM / Shadow DOM when the pages run in the frame of Service Now.
There's a bug bounty for it if you figure it out. I'll buy you some lunch.


