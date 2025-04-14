function homeResponse (req, res, next) {
    // NODE JS RESPONSE not EXPRESS JS
    res.write("welcome to the home page ");
    res.write(" hello utkarsh");
    res.end();
}

module.exports = homeResponse;