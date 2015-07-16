# Check global dependencies, print installation guide if needed
echo 'Global Dependencies Check:'
(type pm2 > /dev/null 2>&1 || echo '* You must install `pm2` globally with `[sudo] npm install -g pm2` so that you can manage processes easily'); \
(type grunt > /dev/null 2>&1 || echo '* You must install `grunt-cli` globally with `[sudo] npm install -g grunt-cli` so that you can build the application'); \
(type node-inspector > /dev/null 2>&1 || echo '* You can install `node-inspector` globally with `[sudo] npm install -g node-inspector` so that you can debug application easily')
(type pm2 > /dev/null 2>&1 && type grunt > /dev/null 2>&1 && type node-inspector > /dev/null 2>&1 && echo '* All global dependencies installed properly')

echo
echo 'Usage Guide:'
echo '* You can build the application with `grunt build`';
echo '* You can start the application with `pm2 start <development.json|production.json>`'
