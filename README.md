# Support Sync

[View deployed site here](https://support-sync-combined-8d126ba42fa5.herokuapp.com/)

## Contents

- [Support Sync](#support-sync)
  - [Contents](#contents)
  - [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Frameworks, Software and Programs](#frameworks-software-and-programs)
  - [Deployment \& Local Development](#deployment--local-development)
    - [Database Creation](#database-creation)
    - [Image Hosting](#image-hosting)
    - [Local Development](#local-development)
    - [Setting up the development environment](#setting-up-the-development-environment)
    - [Running the development environment](#running-the-development-environment)

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

### Setting up the development environment

- The requirements in the requirements.txt wile will have to be installed, using the following command:

  `$ pip install -r requirements.txt`

- An `env.py` file will need to be created to store the configuration variables, here is an example:

```lang-py
import os

os.environ['DEV'] = '1'

os.environ['ALLOWED_HOST'] = (The URL of the development environment, without the 'https://' and the trailing '/' )

os.environ['CLIENT_ORIGIN'] = (The URL of the development environment, including the 'https://' but without the trailing '/')

os.environ['CLOUDINARY_URL'] = (The URL for Cloudinary, that was retrieved in the earlier steps)

os.environ['DATABASE_URL'] = (The Database URLretrieved from the earlier steps)

os.environ['SECRET_KEY'] = (Create a secret key to be used for the Django backend)
```

### Running the development environment

- Open 2 terminals in the development environment.
- In the first terminal, to start the backend, run the following:
  `python manage.py runserver`
- After the above command has completed, in the second terminal, run the following commands, to start the frontend:
  `cd frontend`
  `npm start`
