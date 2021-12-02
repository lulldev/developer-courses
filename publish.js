var glob = require("glob");
const { execSync } = require("child_process");

execSync("rm -rf ./docs/courses");

glob("courses/**/*.marp.md", function (err, files) {
  files.forEach((file) => {
    execSync(
      `./node_modules/.bin/marp ${file} -o docs/${file.replace(
        ".marp.md",
        ""
      )}.pdf`
    );
  });

  execSync("git add ./docs/**/*");
  execSync(`git commit -m "[Update]: Обновление материалов (${new Date()})"`);
  execSync("git push");
});
