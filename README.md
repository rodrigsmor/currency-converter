<h1 align="center"> CURRENCY CONVERTER </h1>

## 📖 Description

This is a simple currency converter application that supports over 160 currencies. You can easily perform currency conversions based on your preferences and access exchange rates for various other options. The core of the application was built in TypeScript, with a backend in Nest.js and a frontend in Next.js, also implementing Docker for container management and environment manipulation.

---

## 📜 Table of contents

- [📖 Description](#-description)
- [📜 Table of contents](#-table-of-contents)
- [🏃🏽‍♂️ How to run](#️-how-to-run)
  - [⚙️ Preparing the environment](#️-preparing-the-environment)
  - [🚀 Running the application](#-running-the-application)
  - [✅ Run tests](#-run-tests)
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
  <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest.js" />
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="JWT Authentication" />
  <img src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white" alt="Swagger" />
  <img src="https://img.shields.io/badge/i18n-0781b5?style=for-the-badge" alt="i18n" />
</div>

## 🖼️ Screenshots

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
docker-compose up frontend-tests (not available yet)
````

So that's it! It's running 🎉

## 🌍  Support links and tutorials

- 🔗 Nest.js documentation: https://docs.nestjs.com/
- 🔗 Docker installation tutorial: https://docs.docker.com/get-docker/
- 🔗 ExchangeRate API documentation: https://www.exchangerate-api.com/docs/overview


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
