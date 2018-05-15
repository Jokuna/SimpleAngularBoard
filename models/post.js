module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: "글의 제목"
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: "작성자 이름"
        }
    }, {
        tableName: 'post',
        comment: "게시물"
    });
    return Post;
};