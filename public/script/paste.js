document.body.onpaste = function(e) {
    var items = e.clipboardData.items;
    for (var i = 0; i < items.length; ++i) {
        var item = e.clipboardData.items[i];
        if (items[i].kind == 'file' && items[i].type.match(/^image\//i)) {
            var fileReader = new FileReader();
            fileReader.onloadend = function () {
                var img = document.getElementById('current');
                img.src= this.result;
                postData(this.result,"/upload");
            };
            fileReader.readAsDataURL(item.getAsFile());
            break; 
        }
    }
    function postData(data,url){
        xhr=new XMLHttpRequest();
        xhr.open("POST",url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send("filename="+new Date().getTime()+"&img="+data);
        xhr.onreadystatechange = function(){
            if (xhr.readyState==4 && xhr.status==200){
                // console.log(xhr.responseText);
                var img = document.createElement("img");
                img.src = xhr.responseText;
                // document.body.appendChild(img);
                showLinkAddress(xhr.responseText);
            }
        }
        function showLinkAddress(address){
            prompt("图片已经成功上传，Ctrl+C复制图片地址！",location.href+address);
            // var input = document.createElement("input");
            // input.value=address;
            // input.onfocus="javascript:this.select();";
            // input.autofocus="autofocus";
            // document.body.appendChild(input);
        }
    }
};
