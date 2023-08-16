const routesNotFound = (error,req,res,next) =>{
    return res.status(404).json({msg: 'Page Not Found'})
}

module.exports = routesNotFound;