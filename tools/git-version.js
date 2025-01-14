// inspired by: https://stackoverflow.com/questions/42155115/how-to-include-git-revision-into-angular-cli-application

const fs = require('fs');
const { exec, execSync } = require('child_process');

const revision = execSync('git rev-parse --short HEAD').toString().trim();

const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

const content = `// this file is automatically generated by git.version.ts script
export const versions = {
  version: '${process.env.npm_package_version}',
  revision: '${revision}',
  branch: '${branch}',
};
`;
console.log(
  `version: '${process.env.npm_package_version}', revision: '${revision}', branch: '${branch}'`,
);
fs.writeFileSync('src/environments/versions.ts', content, { encoding: 'utf8' });
