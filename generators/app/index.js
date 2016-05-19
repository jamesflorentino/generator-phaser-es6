var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  index() {
    this.copy('.jshintrc')
    this.copy('.editorconfig')
    this.copy('gitignore', '.gitignore')
    this.copy('gulpfile.js')
    this.copy('package.json')
    this.copy('yuidoc.json')
    this.directory('src')
    this.directory('public')
    this.bulkDirectory('yuidoc-themes', 'yuidoc-themes')
  }
});
