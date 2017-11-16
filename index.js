module.exports = function(clear) {
  if (clear !== false) {
    process.stdout.write('\x1b[2J');
  }
  process.stdout.write('\x1b[0f');
};
