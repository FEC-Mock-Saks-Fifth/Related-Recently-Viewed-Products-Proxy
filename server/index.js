const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const proxy = require('http-proxy-middleware');
const { routes } = require('../reverseproxyconfig.json');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/* STATIC FILE SERVES */
/* use the following routes to serve bundles packaged by companion repos */
/* static html & css files in THIS proxy server */
app.use(express.static(path.resolve(__dirname, '../common')));
/* service bundle locations */
app.use('/reviews', express.static('/Users/huntertreadaway/code_projects/hack_reactor/hrla33/FEC/Product-Review/client/dist/'))
app.use('/recs', express.static('/Users/huntertreadaway/code_projects/hack_reactor/hrla33/FEC/Related-Recently-Viewed-Products/client/public/'));
app.use('/search', express.static('/Users/huntertreadaway/code_projects/hack_reactor/hrla33/FEC/Nav-Search/client/dist/'));
app.use('/productdetail', express.static('/Users/huntertreadaway/code_projects/hack_reactor/hrla33/FEC/Product-Description/client/dist/'));

/* use this to serve bundles packaged by this program */
// app.use(express.static(path.resolve(__dirname, '../client/public')));

/* ROUTE DELEGATION TO EXTERNAL MODULES */
for (route of routes) {
  app.use(route.route,
      proxy({
          target: route.address,
          pathRewrite: (path, req) => {
            // console.log("USING PROXY ROUTER", `path: ${path}`, `route.address: ${route.address}`);
            return path.split('/').slice(2).join('/'); // Could use replace, but take care of the leading '/'
          }
      })
  );
}

var port = 3013;
app.listen(port, () => {console.log(`app is listening on port: ${port}`)});

module.exports = app;