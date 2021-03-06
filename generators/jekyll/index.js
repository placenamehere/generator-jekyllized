'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    this.option('projectName', {
      type: String,
      required: true,
      desc: 'Project name'
    });

    this.option('projectDescription', {
      type: String,
      required: true,
      desc: 'Project description'
    });

    this.option('projectURL', {
      type: String,
      required: true,
      desc: 'Project URL'
    });

    this.option('authorName', {
      type: String,
      required: true,
      desc: 'Author name'
    });

    this.option('authorEmail', {
      type: String,
      required: true,
      desc: 'Author email'
    });

    this.option('authorURI', {
      type: String,
      required: true,
      desc: 'Author URI'
    });

    this.option('authorBio', {
      type: String,
      required: true,
      desc: 'Author bio'
    });

    this.option('authorTwitter', {
      type: String,
      required: true,
      desc: 'Author Twitter'
    });

    this.option('authorGithub', {
      type: String,
      required: true,
      desc: 'Author Github'
    });

    this.option('jekyllPermalinks', {
      type: String,
      required: true,
      desc: 'Jekyll permalinks'
    });
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('Gemfile'),
      this.destinationPath('Gemfile')
    );

    this.fs.copy(
      this.templatePath('build.js'),
      this.destinationPath('gulp/tasks/build.js')
    );

    this.fs.copyTpl(
      this.templatePath('config.yml'),
      this.destinationPath('_config.yml'),
      {
        projectName: this.options.projectName,
        projectDescription: this.options.projectDescription,
        projectURL: this.options.projectURL,
        authorName: this.options.authorName,
        authorEmail: this.options.authorEmail,
        authorURI: this.options.authorURI,
        authorBio: this.options.authorBio,
        authorTwitter: this.options.authorTwitter,
        authorGithub: this.options.authorGithub,
        jekyllPermalinks: this.options.jekyllPermalinks
      }
    );

    this.fs.copyTpl(
      this.templatePath('config.build.yml'),
      this.destinationPath('_config.build.yml')
    );

    this.fs.copyTpl(
      this.templatePath('humans.txt'),
      this.destinationPath('src/humans.txt'),
      {
        authorName: this.options.authorName,
        authorTwitter: this.options.authorTwitter
      }
    );

    this.fs.copy(
      this.templatePath('app'),
      this.destinationPath('src')
    );
  }
});
