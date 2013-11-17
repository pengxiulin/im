/*
 * GET home page.
 */

exports.index = function(req, res){
    var obj = {
        title:"PasteImage",
        imagesSaved:[
            {src:"http://ww4.sinaimg.cn/large/6588fb91jw1eao683y0ygj218g0x7qf0.jpg"},
            {src:"http://ww1.sinaimg.cn/large/672d59bcjw1eao5rvho20j218g0x7qa6.jpg"},
            {src:"http://ww2.sinaimg.cn/large/653b70e5jw1eaj9emb737j20f40a9wga.jpg"},
            {src:"http://ww1.sinaimg.cn/large/7e7742fbjw1eao5rxwyrpg207v04fb2a.gif"},
            {src:"http://ww1.sinaimg.cn/large/6214e5d7jw1eao4hepbnyj20bk0f00tt.jpg"},
            {src:"http://ww1.sinaimg.cn/large/74a0e24egw1e71p36foqmj20m87854qq.jpg"},
            {src:"http://ww2.sinaimg.cn/large/875f8839jw1eao55v1fzuj20lc0up0zj.jpg"},
            {src:"http://ww3.sinaimg.cn/large/6106a4f0gw1eao4hs3xokj20iz0tyag5.jpg"},
            {src:"http://img12.360buyimg.com/cms/g14/M0A/00/1A/rBEhV1KFzUgIAAAAAAFJQydygbYAAFp5gHVjToAAUlb700.jpg"}
        ]
    };
    res.render('index', obj);
};