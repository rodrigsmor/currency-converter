# CURRENCY CONVERTER

## 📖 Description

This is a simple currency converter application that supports over 160 currencies. You can easily perform currency conversions based on your preferences and access exchange rates for various other options. The core of the application was built in TypeScript, with a backend in Nest.js and a frontend in Next.js, also implementing Docker for container management and environment manipulation.


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
