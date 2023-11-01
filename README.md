<h1 align="center"> CURRENCY CONVERTER </h1>

## 📖 Description

This is a simple currency converter application that supports over 160 currencies. You can easily perform currency conversions based on your preferences and access exchange rates for various other options. The core of the application was built in TypeScript, with a backend in Nest.js and a frontend in Next.js, also implementing Docker for container management and environment manipulation.

<div>
  <a href="https://www.behance.net/gallery/182514075/Currency-Converter-Practical-Project">
    <img src="https://img.shields.io/badge/Behance-1769ff?style=for-the-badge&logo=behance&logoColor=white" alt="behance" />
  </a>
  <a href="https://www.figma.com/file/2qdeWssnXH9s4TqY1M7kM4/Currency-Converter?type=design&node-id=0%3A1&mode=design&t=t7QExgWVf1qgCNK6-1">
    <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" />
  </a>
</div>

---

## 📜 Table of contents

- [📖 Description](#-description)
- [📜 Table of contents](#-table-of-contents)
- [⚒️ Technologies](#️-technologies)
- [🖼️ Screenshots](#️-screenshots)
  - [🏡  Home Page](#--home-page)
    - [📱 Mobile screenshots](#-mobile-screenshots)
    - [🖥 Desktop screenshots](#-desktop-screenshots)
  - [🔍 Search Page](#-search-page)
    - [📱 Mobile screenshots](#-mobile-screenshots-1)
    - [🖥 Desktop screenshots](#-desktop-screenshots-1)
- [🏃🏽‍♂️ How to run](#️-how-to-run)
  - [⚙️ Preparing the environment](#️-preparing-the-environment)
  - [🚀 Running the application](#-running-the-application)
  - [✅ Run tests](#-run-tests)
- [📚 Documentation](#-documentation)
  - [🔌 API Documentation](#-api-documentation)
- [🌍  Support links and tutorials](#--support-links-and-tutorials)
- [👨🏽‍🦱 Author](#-author)

---

## ⚒️ Technologies

<div>
  <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
  <img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" alt="NPM" />
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" />
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript" />
  <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" alt="Nest.js" />
  <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest.js" />
  <img src="https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white" alt="Storybook" />
  <img src="https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e" alt="Cypress" />
  <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white" alt="React Query" />
  <img src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white" alt="Swagger" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled components" />
  <img src="https://img.shields.io/badge/i18n-0781b5?style=for-the-badge" alt="i18n" />
</div>

## 🖼️ Screenshots

----

### 🏡  Home Page


#### 📱 Mobile screenshots

<div>
  <img width="49%" src="https://i.ibb.co/b70s76v/Screen-Shot-2023-10-18-at-23-37-51.png" alt="Mobile screenshot">
  <img width="49%" src="https://i.ibb.co/z5WVzgg/Screen-Shot-2023-10-18-at-23-37-47.png" alt="Mobile screenshot">
</div>


#### 🖥 Desktop screenshots

<img src="https://i.ibb.co/Cwf0TwT/Screen-Shot-2023-10-18-at-23-37-27.png" alt="Home page screenshot in Desktop screen" />

----

### 🔍 Search Page


#### 📱 Mobile screenshots

<div>
  <img width="49%" src="https://i.ibb.co/Y8c0942/Screen-Shot-2023-10-29-at-22-34-04.png" alt="Mobile screenshot">
  <img width="49%" src="https://i.ibb.co/XXFvG0v/Screen-Shot-2023-10-29-at-22-33-53.png" alt="Mobile screenshot">
</div>


#### 🖥 Desktop screenshots

<img src="https://i.ibb.co/94DG1cT/Screen-Shot-2023-10-29-at-22-33-23.png" alt="Search page screenshot in Desktop screen" />

----

## 🏃🏽‍♂️ How to run

> 💭 **Considerations:** The application has been developed using [exchangerate-api's](https://www.exchangerate-api.com/) services, meaning that if you want to run it locally you'll have to connect to the application and fill in the settings with your own credentials.

First of all, you'll need to clone the application to your own device. To do this, simply run the following commands in your terminal in the directory of your choice:

````
git clone https://github.com/rodrigsmor/currency-converter.git
````

Then, when the cloning is complete, you'll need to go to the cloned directory.

`````
cd currency-converter
`````

Well, now that you have the project present on your device, we can move on to the next steps.

### ⚙️ Preparing the environment

Once the application has been cloned to your local device and you has access to exchangerate-api's services, you'll need to do a small configuration for the application to work properly.

To do this, in the root of the project you have created, simply create a file called `.env` where you will leave the environment variables needed to run the application. Create the following variables in `.env` (don't forget to use the exchangerate-api credentials): 

````
EXCHANGE_RATE_ACCESS_KEY = "the credential to access exchangerate-api services"
EXCHANGE_RATE_BASE_URL = "the base URL of the exchange rate api"
````

Finally, you need to create an environment variable to define which port the back-end will run on. To do this, create the following environment variable in your `.env`.

````
BACKEND_HOST="the back-end host port'
````
> 💭 **Considerations:** by default the front-end will be running on port 3000.

With these simple settings, your application should already be close to working perfectly.

### 🚀 Running the application

Now that the settings have been made, it's time to run the application. Assuming you already have Docker and docker compose running on your device, simply run the following commands:

````
docker-compose build
docker-compose up
````

If you prefer a shorter version, run the following in your terminal:

````
docker-compose up --build
````

That's it! Your application will be available to you at `http://localhost:3001`, you can test it in your preferred browser.

### ✅ Run tests

Running the tests is actually quite easy. Given that the application is already built on your device, you'll need to run one of the following commands.

````
## to run backend tests
docker-compose up backend-tests

## to run frontend tests
docker-compose up frontend-tests
````

So that's it! It's running 🎉

## 📚 Documentation

If you want to access the application's documentation, you'll need to follow these steps:

### 🔌 API Documentation

To access the API documentation, you should first follow the previous steps to set up and run the application correctly. Once the application is properly configured and running, you only need to open the `/documentation` route on the backend server in your preferred web browser. For example:

```
http://localhost:3001/documentation
```

## 🌍  Support links and tutorials

- 🔗 Next.js documentation: https://nextjs.org/docs/
- 🔗 Nest.js documentation: https://docs.nestjs.com/
- 🔗 Swagger documentation: https://swagger.io/docs/
- 🔗 Jest documentation: https://jestjs.io/docs/getting-started
- 🔗 Docker installation tutorial: https://docs.docker.com/get-docker/
- 🔗 Styled components documentation: https://styled-components.com/docs
- 🔗 Swagger configuration in Nestjs: https://docs.nestjs.com/openapi/introduction
- 🔗 ExchangeRate API documentation: https://www.exchangerate-api.com/docs/overview
- 🔗 Next International Setup: https://next-international.vercel.app/docs/app-setup
- 🔗 Cypress Component Testing: https://docs.cypress.io/guides/component-testing/getting-started
- 🔗 Next.js Testing optimization: https://nextjs.org/docs/pages/building-your-application/optimizing/testing
- 🔗 Nest.js internationalization (i18n): https://github.com/ToonvanStrijp/nestjs-i18n


## 👨🏽‍🦱 Author

<img height="100px" src="https://avatars.githubusercontent.com/u/78985382?v=4" alt="Rodrigo profile picture">
<p>Developed with love by <b size="48px">Rodrigo Moreira</b> 
 💜🚀</p>

---

<div>
  <a href="mailto:rodrigsmor.pf@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="gmail">
  </a>
  <a href="https://www.linkedin.com/in/psrodrigomoreira/">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://www.behance.net/rodrigsmor">
    <img src="https://img.shields.io/badge/Behance-1769ff?style=for-the-badge&logo=behance&logoColor=white" alt="behance">
  </a>
  <a href="https://dev.to/psrodrigs">
    <img src="https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=devdotto&logoColor=white" alt="dev.to">
  </a>
</div>

[def]: #📒-introduction
