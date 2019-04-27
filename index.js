export default function() {
  this.extendBuild((config) => {
    config.plugins.push(function() {
      this.hooks.done.tap("done", (stats) => {
        if (stats.compilation.errors && stats.compilation.errors.length) {
          stats.compilation.errors.forEach((e) => {
            console.error(e.message);
          });
          process.exit(1);
        }
      });
    });
  });
}
