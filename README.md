# [Kraken.js](http://krakenjs.com/) on [Nunjucks](http://mozilla.github.io/nunjucks/)

![Kraken on Nunjucks Screenshot](http://maciejsmolinski.com/kon-screenshot.png)

## 1. Installation

1. Clone the repository and checkout the folder
2. Install project dependencies
    1. All Environments: `[sudo] npm install -g grunt-cli pm2 && npm install`
2. Build assets:
    1. Development (build and watch): `grunt`
    2. Production (build): `grunt build`
3. Run node server:
    1. Development environment: `[PORT=8000] node .`
    2. Production environment: `[PORT=8000] NODE_ENV=production node .`

### 1.1. Process Manager

![Kraken on Nunjucks Screenshot](http://maciejsmolinski.com/kon-pm2.png)

1. You can use [PM2](https://github.com/Unitech/PM2/) process manager so that the application restarts automatically in development mode and watches for file changes. It sets port and environment variables automatically via configuration file.
    1. Install it with `[sudo] npm install -g pm2`
    2. Start the application: `pm2 start <development.json|production.json>`
    3. Start or restart the application: `pm2 startOrRestart <development.json|production.json>`
    4. Monit processes: `pm2 monit`
    5. Tail logs: `pm2 logs`
    6. Reload processes: `pm2 reload all`
    7. Restart processes: `pm2 restart all`
    8. Kill the process manager: `pm2 kill`


## 2. Configuration

### 2.1. Node.js

Node.js configuration is stored in **config** directory. Production configuration is called `config.json`, development overrides production and is called `development.json`


## 3. Debugging

### 3.1. Application Logs

1. In order to see debug logs, simply prepend `DEBUG=*` to the command you're running, e.g. `DEBUG=* node .`
2. In order to keep debug information of a given type on your screen, use proper filtering, e.g. `DEBUG=express:router`, `DEBUG=express:*` etc.

### 3.2. JavaScript debugging

1. In order to debug JavaScript like you do it with the browser:
    1. Install **node-inspector** globally with `[sudo] npm install -g node-inspector`
    2. Open **node-inspector** on a given port, e.g. `node-inspector --web-port 9191`
    3. Run your application with `--debug` flag if you'd like to set breakpoints yourself, e.g. `node --debug .`
    4. Run it with `--debug-brk` if you'd like to break before JavaScript starts executing, e.g. `node --debug-brk .`
    5. Open URL `node-inspector` provided you with in your browser, e.g. `http://127.0.0.1:9191/debug?ws=127.0.0.1:9191&port=5858`


## 4. Dependencies

* [Kraken.js](http://krakenjs.com/) - Kraken is a light extension to [express.js](http://expressjs.com) developed on a daily basis by PayPal. It helps us keep everything well organised and configurable per environment via json files. Kraken's actually a structure you end up with after weeks of creating project yourself using express.js (time saver), why to write in pure express then?
* [Nunjucks](http://mozilla.github.io/nunjucks/) - lightweight, well documented and supported template engine based on the Jinja syntax (same syntax as Twig for PHP)
* [Grunt.js](http://gruntjs.com/) - JavaScript tasks runner, one of the two big competitors on the market (Grunt.js and Gulp). Grunt is more mature.
