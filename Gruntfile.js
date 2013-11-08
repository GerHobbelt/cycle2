/*jshint node:true */
module.exports = function( grunt ) {

grunt.loadNpmTasks( "grunt-git-authors" );
grunt.loadNpmTasks( "grunt-contrib-concat" );
grunt.loadNpmTasks( "grunt-contrib-jshint" );
grunt.loadNpmTasks( "grunt-contrib-qunit" );
grunt.loadNpmTasks( "grunt-contrib-watch" );


function process( code ) {
	return code

		// Embed version
		.replace( /@VERSION/g, grunt.config( "pkg" ).version )

		// Embed date (yyyy-mm-ddThh:mmZ)
		.replace( /@DATE/g, ( new Date() ).toISOString().replace( /:\d+\.\d+Z$/, "Z" ) );
}

grunt.initConfig({
	pkg: grunt.file.readJSON( "package.json" ),
	concat: {
		"basic": {
			options: { process: process },
			src: [
				"intro.js",

				"jquery.cycle2.core.js",
				"jquery.cycle2.autoheight.js",
				"jquery.cycle2.caption.js",
				"jquery.cycle2.command.js",
				"jquery.cycle2.hash.js",
				"jquery.cycle2.loader.js",
				"jquery.cycle2.pager.js",
				"jquery.cycle2.prevnext.js",
				"jquery.cycle2.progressive.js",
				"jquery.cycle2.tmpl.js",

				"outro.js"
			],
			dest: "dist/jquery.cycle2.js"
		}
		"full": {
			options: { process: process },
			src: [
				"intro.js",

				"jquery.cycle2.core.js",
				"jquery.cycle2.autoheight.js",
				"jquery.cycle2.caption.js",
				"jquery.cycle2.command.js",
				"jquery.cycle2.hash.js",
				"jquery.cycle2.loader.js",
				"jquery.cycle2.pager.js",
				"jquery.cycle2.prevnext.js",
				"jquery.cycle2.progressive.js",
				"jquery.cycle2.tmpl.js",

				"jquery.cycle2.caption2.js",
				"jquery.cycle2.carousel.js",
				"jquery.cycle2.center.js",
				"jquery.cycle2.flip.js",
				"jquery.cycle2.ie-fade.js",
				"jquery.cycle2.scrollVert.js",
				"jquery.cycle2.shuffle.js",
				"jquery.cycle2.swipe.js",
				"jquery.cycle2.tile.js",
				"jquery.cycle2.video.js",

				"outro.js"
			],
			dest: "dist/jquery.cycle2.full.js"
		}
		"tiny": {
			options: { process: process },
			src: [
				"intro.js",

				"jquery.tcycle.js",

				"outro.js"
			],
			dest: "dist/jquery.cycle2.tiny.js"
		}
	},
	jshint: {
		options: {
			jshintrc: ".jshintrc"
		},
		gruntfile: [ "Gruntfile.js" ],
		dist: [ "dist/*.js" ],
		src: [ "./*.js" ]
	},
	watch: {
		files: [ ".jshintrc", "{*,.*}" ],
		tasks: "default"
	}
});

grunt.registerTask( "build", ["concat"] );
grunt.registerTask( "default", ["build", "jshint"] );

};
