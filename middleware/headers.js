module.exports = (req, res, next) => {
    res.header("access-control-allow-origin", "*"); // for CORS
    res.header("access-control-allow-methods", "GET,PUT,POST,DELETE");
    res.header("access-control-allow-headers", "Origin, X-Requested-With, Accept, Content-Type, Authorization");
    next();
}