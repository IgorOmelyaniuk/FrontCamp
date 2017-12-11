module.exports = function (source) {
    const data = {};
    const jsonContent = JSON.parse(source);

    for (let key in jsonContent) {
        if (!parseInt(key)) {
            data[key] = jsonContent[key];
        }
    }

    return JSON.stringify(data);
};