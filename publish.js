var glob = require("glob");
const { execSync } = require("child_process");

glob("courses/**/*.md", function (err, files) {
  files.forEach((file) => {
    execSync(`./node_modules/.bin/marp ${file} -o docs/${file}.pdf`);
  });

  execSync("git add ./docs/**/*");
  execSync(
    `git commit -m "[Update]: Обновление материалов презентаций (${new Date()})"`
  );
  execSync("git push");
});
