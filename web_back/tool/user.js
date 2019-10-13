//这个user.js用来管理用户进行的所有接口请求操作
var user = {
    //login方法用来管理用户登录接口的操作方式
    login: function(options) {
        $.ajax({
            type: 'post',
            url: USER_LOGIN,
            data: options.data,
            success: options.callback
        });
    },

    //logout方法用来管理用户退出接口的操作方式
    logout: function(options) {
        $.ajax({
            type: 'post',
            url: USER_LOGOUT,
            success: options.callback
        });
    },

    //getuser方法用来管理用户的简单信息获取接口的操作方式
    getInfo: function(options) {
        $.ajax({
            url: USER_INFO,
            success: options.callback
        });
    }

}