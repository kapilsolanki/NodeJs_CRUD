const Post = require("../models/post")

exports.getPosts = (req, res) => {

    const posts = Post.find()
        .then((posts) => {
            res.status(200).json({ "posts": posts })
        })
        .catch((err) => console.log(err))

};


exports.createPost = (req, res) => {
    const post = new Post(req.body);
    // console.log("CREATING POST : ", req.body);
    // post.save((err, result) => {
    //     res.status(200).json({
    //         post : result
    //     })

    // })

    post.save().then(result => {
        res.status(200).json({
            post: result
        });
    });

}

exports.deletePost = (req,res) => {
    console.log("TESTING : ", req.params);
    const post = Post.deleteOne({_id:req.params.id}).then(result => {
        res.status(200).json({
            post :result
        })
    }).catch((err) => console.log(err))
}

