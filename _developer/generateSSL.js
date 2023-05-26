import chalk from 'chalk';
import { exec } from 'child_process';
import fs from 'fs';

(async () => {
    let domainName = 'localhost';
    let isTestDomain = false;
    if (process.argv[2]) {
        domainName = process.argv[2];
        const domainRegex = /^[a-zA-Z0-9.-]+\.(test)$/;
        isTestDomain = domainRegex.test(domainName);
        if (!isTestDomain) {
            console.log(chalk.red("Invalid domain name provided. Please provide a valid .test domain."));
            process.exit(1);
        }
    }
    // generate certificate
    const certFilePath = `./ssl/${domainName}.pem`;
    const keyFilePath = `./ssl/${domainName}-key.pem`;
    const command = `mkcert -cert-file "${certFilePath}" -key-file "${keyFilePath}" ${domainName}`;
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log(chalk.red(`Error executing mkcert command: ${error.message}`));
            process.exit(1);
        }
        if (stderr) {
            console.log(stderr);
        }
    });
    // generate local-ssl-proxy config
    const proxyConfig = {
        [domainName]: {
            hostname: domainName,
            cert: certFilePath,
            key: keyFilePath,
            source: 443,
            target: 3000
        }
    };
    fs.writeFileSync('./proxy-config.json', JSON.stringify(proxyConfig, null, 2));
    console.log(chalk.green('SSL certificate and key generated successfully.'));
    if (isTestDomain) {
        console.log(chalk.green('Please add the following entry to your hosts file:'));
        console.log(chalk.yellow(`127.0.0.1 ${domainName}`));
    }
})();