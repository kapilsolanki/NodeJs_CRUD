exports.createPostValidator = (req, res, next) => {

//TITLE
req.check("title","Write a title").notEmpty();
req.check("title","title must be between 4 to 150 characters").isLength({
    min : 4,
    max : 150
});

//BODY
req.check("body","write a body").notEmpty();
req.check("body","body must be between 4 to 2000 characters").isLength({
    min:4,
    max:2000
});

//CHECK ERRORS
const errors = req.validationErrors()
//IF ERROR SHOW THE FIRST ONE AS THEY HAPPEN
if(errors){
    const firstError = errors.map((error) => error.msg)[0]
    return res.status(400).json({
        error : firstError
    })
}

//PROCEED TO NEXT MIDDLEWARE
next();

};