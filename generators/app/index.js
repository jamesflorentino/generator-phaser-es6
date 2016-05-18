var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  index() {
    this.copy('.jshintrc')
    this.copy('gulpfile.js')
    this.copy('package.json')
    this.copy('yuidoc.json')
    this.fs.copy(this.templatePath('public/**/*'), this.destinationRoot('public'))
    this.fs.copy(this.templatePath('src/**/*'), this.destinationRoot('src'))
  }
});
