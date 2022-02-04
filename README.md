[![Netlify Status](https://api.netlify.com/api/v1/badges/0a38dd22-ac3c-4c87-adc7-021e01f5facc/deploy-status)](https://app.netlify.com/sites/cryptowelt/deploys)

# Crypto Welt

This is a website built with React JS in the Frontend side, and the styling was used the Ant design Framework. It has a Navbar in the left side to choose between Homepage, Cryptocurrencies and News about the crypto world.

The Web site App is hosted on Netlify, the link to access is to look at it is: [https://cryptowelt.netlify.app](https://cryptowelt.netlify.app).

The data is been taken from 2 external APIs that are listed in Rapid API. One API with all the data of cryptos from Coinranking, and the news with another API from Bing News.

The API [Coinranking](https://rapidapi.com/Coinranking/api/coinranking1/) was used to get Crypto prices and other statistics.

The API [Bing News Search API](https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/) was used to get up to date information about the cryptocurrencies.

This Project has been separated into some pieces. This peaces called components are: Homepage, Cryptocurrencies, News and the Navbar. These were built with funtional-based components.

![Crypto Welt Web App](/public/screenshot-website.jpg)

## Dependencies installed

I used some libraries to build the project,libraries for UI, the library to perform the API request with Redux Tool kit, and a CSS framework Ant Design.

To formatting the numbers from statistics and cypto prices I used Minilify.

The packages installed in the react project were the following:

npm install antd @ant-design/icons @reduxjs/toolkit react-router-dom react-redux axios html-react-parser millify moment react-chartjs-2

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
