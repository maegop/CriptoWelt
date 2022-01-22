# Crypto Welt

This is a website build with React JS, It has a Navbar in the leftside to choose between Homepage, Cryptocurrencies and News about the crypto world.

The Web site App was hosted on Netlify, the link to access is to look at it is [https://cryptowelt.netlify.app/](https://cryptowelt.netlify.app/).

The data is been token from 2 APIs that are listed in Rapid API. One API with all the data of cryptos from Coin Ranking, and the news with another API from Bing news.

The API [Coinranking](https://rapidapi.com/Coinranking/api/coinranking1/) was used to get Crypto prices and other statistics.

The API [Bing News Search API](https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/) was used yo get content about the cryptocurrencies.

## Dependencies installed

I used some libraries to build the project,libraries for UI, the library to perform the API request with Redux Tool kit, and a CSS framework Ant Design.

To formatting the numbers from statistics and cypto prices I used Minilify.

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
