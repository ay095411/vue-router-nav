export default {
    setDocumentTitle: title => {
        document.title = title;
		// let i = document.createElement('iframe');
		// i.style.display = 'none';
		// i.onload = function () {
		//     setTimeout(function () {
		//         i.remove();
		//     }, 100)
		// }
		// document.body.appendChild(i);
    },
    // 手机号码验证
    phone(phone) {
        if (/^[1][2,3,4,5,6,7,8,9][0-9]{9}$/.test(phone)) {
            return true
        }

        return false
    },
    // 截取url里面的属性值
    getParam(){
        var qs = location.search.substr(1),
          args = {},
          items = qs.length ? qs.split("&") : [],
          item = null,
          len = items.length;
        for(var i = 0; i < len; i++) {
          item = items[i].split("=");
          var name = decodeURIComponent(item[0]),
          value = decodeURIComponent(item[1]);
          if(name) {
            args[name] = value;
          }
        }
        return args;
    }
}
