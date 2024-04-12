const util = require('util');
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");
  // eleventyConfig.addPassthroughCopy("./src/img");

  eleventyConfig.addCollection("sections", function(collection) {
		return collection.getAllSorted().filter(function(item) {
			return item.inputPath.match(/^\.\/src\/sections\//) !== null;
		}).sort(function(a, b) {
			return b.data.order - a.data.order;
		});
	});

  eleventyConfig.setLibrary("md", markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }));

  eleventyConfig.addFilter('dump', obj => {
    return util.inspect(obj)
  });
  
  return {
    templateFormats: [
			"md",
			"njk",
			"html"
		],
    markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
    },
  };
};
