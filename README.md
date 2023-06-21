# Evaluate Blog/Articles using MeaningCloud Sentiment Analysis API

This project is the final project of Udacity's Frontend Developer Nanodegree programme sponsored by Bertelsmann. This project evaluates Blog using MeaningCloud's sentiment analysis API that utilises Natural Language Processing (NLP).

## Table of Contents

- [Evaluate Blog/Articles using MeaningCloud Sentiment Analysis API](#evaluate-blog-articles-using-meaningcloud-sentiment-analysis-api)
- [Table of content](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Unit Testing](#unit-testing)
- [Credits](#credits)


## Installation

### Step 1: Download and install [Node](https://nodejs.org/en)

### Step 2: Clone the repo

    `git clone https://github.com/afroisaac/NLPonBlogPosts.git`

### Step 3: `cd` into `NLPonBlogPosts` and run:

    `npm install`

### Step 4: Create a `.env` file in the root directory of the project and ensure you signup for the Application key on [here](https://www.meaningcloud.com/)

Add the following to the file:

    `APPLICATION_KEY=***************************************

    ENDPOINT_URL=https://api.meaningcloud.com/sentiment-2.1


## Usage

To use this application, there are two modes, `development` and `production`:

### Development mode

For development mode, run these commands in two different terminals:

1. `npm start` to start the server

2. `npm run build-dev` to start up the interface

3. You can then type in a `text` or a `url` in to analayze


For production mode, run this commands:

1. `npm run build-prod` and wait briefly for the assets to be generated

2. `npm start` and then open up your browser and type `localhost:8081`


3. You can then type in a `text` or a `url` in to analayze

## Development

This project was built using Nodejs, Javascript, HTML, and SASS.

Asset bundling and management - Webpack v5

Unit Testing - Jest framework

## Unit Testing

To run the tests, run the following commands on two separate terminals:
    
    `npm start` 
    
    `npm test`
    
## Credits

Credits to the following:

Udacity Team for providing the starter code
