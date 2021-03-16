module.exports = function clear(fullClear = true, keepLastScreen = false) {
    if (typeof fullClear == 'object') throw new Error('API has changed.');
    if (fullClear) {
        if (keepLastScreen) {
            process.stdout.write('\n'.repeat(process.stdout.rows));
        }
        process.stdout.write('\x1b[2J\x1b[0f');
    }
    else {
        process.stdout.write('\x1b[0f');
    }
};
