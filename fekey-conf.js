// default settings. fis3 release

fis.set('project.ignore', ['fekey-conf.js', 'package.json', 'README.md']); // set 为覆盖不是叠加

// Global start
fis.match('/*.{js,css}', {
  useHash: true
});

fis.match('::image', {
  useHash: true
});

fis.match('/*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('/*.css', {
  optimizer: fis.plugin('clean-css')
});

fis.match('/*.png', {
  optimizer: fis.plugin('png-compressor')
});

// Global end