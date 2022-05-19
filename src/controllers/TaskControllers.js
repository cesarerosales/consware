function index(req, res){
    res.render('task/index');
}

function create(req, res){
    res.render('task/create ');
}

module.exports = {
    index: index,
    create:create,
}
