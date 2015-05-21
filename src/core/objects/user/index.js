module.exports = {
    api: require('./user.api'),
    model: require('./user.model'),
    constants: require('./user.constants'),
    collection: require('./user.collection').getInstance()
};
