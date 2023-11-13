# Support Sync

[View deployed site here](https://support-sync-combined-8d126ba42fa5.herokuapp.com/)

## Contents

- [Support Sync](#support-sync)
  - [Contents](#contents)
  - [About](#about)
  - [User Stories](#user-stories)
    - [User Authentication \& Profiles Sprint](#user-authentication--profiles-sprint)
      - [Create Account User Story](#create-account-user-story)
      - [Sign In User Story](#sign-in-user-story)
      - [Sign Out User Story](#sign-out-user-story)
    - [Ticket Control Sprint](#ticket-control-sprint)
      - [Create Ticket User Story](#create-ticket-user-story)
      - [Edit Ticket User Story](#edit-ticket-user-story)
      - [Delete Ticket User Story](#delete-ticket-user-story)
      - [List Tickets User Story](#list-tickets-user-story)
      - [Ticket Detail View User Story](#ticket-detail-view-user-story)
    - [Comment Control Sprint](#comment-control-sprint)
      - [Create Comment User Story](#create-comment-user-story)
      - [Edit Comment User Story](#edit-comment-user-story)
      - [Delete Comment User Story](#delete-comment-user-story)
      - [List Comments User Story](#list-comments-user-story)
  - [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Frameworks, Software and Programs](#frameworks-software-and-programs)
  - [Deployment \& Local Development](#deployment--local-development)
    - [Database Creation](#database-creation)
    - [Image Hosting](#image-hosting)
    - [Local Development](#local-development)
    - [Development Environment Setup](#development-environment-setup)
    - [Running the Development Snvironment](#running-the-development-snvironment)
    - [Compiling Static Files for Deployment](#compiling-static-files-for-deployment)
    - [Project Deployment](#project-deployment)
  - [Testing](#testing)

## About

SupportSync is a powerful and intuitive ticketing system designed to streamline technical issue tracking and resolution within your organization. Whether you're managing IT support requests, troubleshooting technical challenges, or coordinating tasks across various departments, SupportSync provides a robust platform to enhance communication and collaboration.

## Project Goals

### Streamlined User Accounts

Information stored about each user should be kept to a minimum, to ensure unneeded PII (Personal Identifiable Information) is not kept, as well as keeping the database size down, if this was to be scaled to an Enterprise solution.

### Effortless Issue Reporting

Users can easily report technical issues or service requests, providing essential details for efficient troubleshooting. This should be a quick process, to allow for speedy resolution of the issue.

### Fosters Collaboration

All users should be able to respond on a ticket, regardless of role, allowing cross-team collaboration and resulting in a faster response time. Allowing collaboration can also allow for a situations, such as a users manager approving a request within the comments. The comments should be where discussion of the issue occurs.

## User Stories

The User Stories in this project have been tracked using a GitHub Project for a Kanban board and also GitHub Milestones to track the progress of individual sprints.
[View the User Story GitHub Project here](https://github.com/users/CallumDennisIE/projects/6)

### [User Authentication & Profiles Sprint](https://github.com/CallumDennisIE/support-sync-api/milestone/1?closed=1)

The **User Authentication & Profiles Sprint** relates the project goal of **Streamlined User Accounts**.

#### [Create Account User Story](https://github.com/CallumDennisIE/support-sync-api/issues/1)

As a Requestor, I would like to be able to sign up to create a new account. I would expect to fill in my username and provide a password, that I could later use to sign in. The sign up form should have appropriate validation to ensure the correct values are passed. I should be visually notified when I have signed up.

As a Supporter, I would expect an admin to create my user credentials, to avoid requestors having access to create supporter accounts.

#### [Sign In User Story](https://github.com/CallumDennisIE/support-sync-api/issues/3)

As a Requestor/Supporter, I would like to be able to sign in using my credentials created while signing up. The sign up form should have appropriate validation to ensure the correct values are passed. I should be visually notified when I have signed up.

#### [Sign Out User Story](https://github.com/CallumDennisIE/support-sync-api/issues/14)

As a Requestor/Supporter, I would like to be able to sign out of my account when I want to stop accessing information locked to me

### [Ticket Control Sprint](https://github.com/CallumDennisIE/support-sync-api/milestone/2?closed=1)

The **Ticket Control Sprint** relates the project goal of **Effortless Issue Reporting**.

#### [Create Ticket User Story](https://github.com/CallumDennisIE/support-sync-api/issues/5)

As a Requestor, I would like to be able to submit a form to create a new ticket. This would have to be fully validated for user inputs. I would like to input the title, description and starting priority.

#### [Edit Ticket User Story](https://github.com/CallumDennisIE/support-sync-api/issues/13)

As a Requestor/Supporter, I would like to be able to edit a ticket, including the description, title, status and priority

#### [Delete Ticket User Story](https://github.com/CallumDennisIE/support-sync-api/issues/12)

As a requestor, I would like to be able to delete a ticket that I own. I would expect not to see that ticket appear when viewing tickets.

#### [List Tickets User Story](https://github.com/CallumDennisIE/support-sync-api/issues/6)

As a Requestor/Supporter, I would like to be able to list all tickets. I would expect to be able to click on a individual ticket to get more information.

#### [Ticket Detail View User Story](https://github.com/CallumDennisIE/support-sync-api/issues/7)

As a Requestor/Supporter, I would like to be able to view a detailed page containing the ticket description, title, status and priority, requestor.

### [Comment Control Sprint](https://github.com/CallumDennisIE/support-sync-api/milestone/3?closed=1)

The **Comment Control Sprint** relates the project goal of **Fosters Collaboration**.

#### [Create Comment User Story](https://github.com/CallumDennisIE/support-sync-api/issues/9)

As a Requestor/Supporter, I would like to be able to create a comments on a ticket. To be able to provide more information / assist the requestor.

#### [Edit Comment User Story](https://github.com/CallumDennisIE/support-sync-api/issues/11)

As a Requestor/Supporter, I would like to be able to edit comments I have created, allowing me to edit mistakes.

#### [Delete Comment User Story](https://github.com/CallumDennisIE/support-sync-api/issues/10)

As a Requestor / Supporter, I would like to be able to delete my own comments, in case I have provided the incorrect information.

#### [List Comments User Story](https://github.com/CallumDennisIE/support-sync-api/issues/8)

As a Requestor/Supporter, I would like to be able to list all comments on a ticket. To be able to see the discussion and assistance given on a ticket.

## Technologies Used

### Languages

- [HTML](https://en.wikipedia.org/wiki/HTML) - For base page content.

- [CSS](https://en.wikipedia.org/wiki/CSS) - For custom element styling.

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Using React to display frontend elements.

- [Python](https://www.python.org/) - Utilising Django to create the backend environment.

### Frameworks, Software and Programs

- [React.js](https://react.dev/) - Creates reusable and decoupled frontend components.

- [Django](https://www.djangoproject.com/) - Backend framework for storing models, pages and views.

- [Django REST Framework](https://www.django-rest-framework.org/) - Django framework to serve backend models as an API endpoint.

- [React Bootstrap](https://react-bootstrap.github.io/) - Prebuilt toolkit to create elements.

- [GitHub](https://github.com/) - Code storage on a repository.

- [Heroku](https://en.wikipedia.org/wiki/Heroku) - Web hosting for site.

- [Cloudinary](https://cloudinary.com/) - Image storage and hosting for site.

- [ElephantSQL](https://www.elephantsql.com/) - Backend database, PostgreSQL as a Service

- [CodeAnywhere](https://app.codeanywhere.com/) - Cloud Development platform.

- [Miro](https://miro.com/) - Visual project management and planning

- [Figma](https://www.figma.com/) - Site and element planning / wireframing

- [ChatGPT](https://chat.openai.com/) - Used to create sample content for tickets and comments.

## Deployment & Local Development

### Database Creation

- For this project ElephantSQL was used for a PostgreSQL database.

- Once created, the Database URL will have to be copied.

### Image Hosting

- Cloudinary was used for image hosting on the project.

- Once an account is created, the Cloudinary URL will have to be stored.

### Local Development

Steps to fork this project using GitHub:

1. Navigate to the GitHub repository for this project.

2. Click the 'Fork' button (top right-hand side of the repository page).

For more information on how to fork a GitHub repository please click [here](https://docs.github.com/en/get-started/quickstart/fork-a-repo)

Steps to clone this project using GitHub:

1. Navigate to the GitHub repository for this project.

2. Click on the 'Code' button, located above the project files.

3. Select 'HTTPS' as the method to clone the repository.

4. Copy the link provided, located under 'HTTPS'.

5. Open the Terminal in the location you would like the repository to be cloned to.

6. Type `git clone` and then the link provided in step 4

For more information on how to clone a GitHub repository please click [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

### Development Environment Setup

- The requirements in the requirements.txt wile will have to be installed, using the following command:

  `$ pip install -r requirements.txt`

- An `env.py` file will need to be created to store the configuration variables, here is an example:

```lang-py
import os

os.environ['DEV'] = '1'

os.environ['ALLOWED_HOST'] = (The URL of the development environment, without the 'https://' and the trailing '/')

os.environ['CLIENT_ORIGIN'] = (The URL of the development environment, including the 'https://' but without the trailing '/')

os.environ['CLOUDINARY_URL'] = (The URL for Cloudinary, that was retrieved in the earlier steps)

os.environ['DATABASE_URL'] = (The Database URL retrieved from the earlier steps)

os.environ['SECRET_KEY'] = (Create a secret key to be used for the Django backend)
```

- To install NPM, please run the following commands:  
  `cd frontend`  
  `npm install`

### Running the Development Snvironment

- Open 2 terminals in the development environment.
- In the first terminal, to start the backend, run the following:  
  `python manage.py runserver`
- After the above command has completed, in the second terminal, run the following commands, to start the frontend:  
  `cd frontend`  
  `npm start`

### Compiling Static Files for Deployment

- Before the project can be deployed, the relevant static files must be collected, after a change to the code is made. Both Django and NPM need to have their relevant static files collected.
- To collect the Django static files run:  
  `python3 manage.py collectstatic`
- To collect the static files for the frontend, run the following:  
  `cd frontend`  
  `npm run build && rm -rf ../staticfiles/build && mv build ../staticfiles/.`

### Project Deployment

- Heroku was used for deploying this project.
- After creating a new app in Heroku, create the following 'Config Vars' in the 'Settings' of the app:
  - `ALLOWED_HOST` = The URL of the deployed project, without the 'https://' and the trailing '/'
  - `CLIENT_ORIGIN` = The URL of the deployed project, including the 'https://' but without the trailing '/'
  - `CLOUDINARY_URL` = The URL for Cloudinary, that was retrieved in the earlier steps
  - `DATABASE_URL` = The Database URL retrieved from the earlier steps
  - `DISABLE_COLLECTSTATIC` = `1`
  - `SECRET_KEY` = The Django secret key, retrieved from the earlier steps
- In the 'Deploy' section of the app, select 'GitHub' as the 'Deployment method'
- Copy and paste the URL of the GitHub cloned repository to link it to the app.
- Click 'Deploy Branch' in the 'Manual deploy' section

## Testing

- Code ran through ESLint linter without warnings
