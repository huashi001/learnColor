Page({
  data: {
    originalColor: 'ff0000',
    rgbColor: '255,0,0',
    isShow: false
  },
  isValidColor: function (color) {
    var re = /^(([0-9a-fA-F]{6})|([0-9a-fA-F]){3})$/;
    return re.test(color);
  },
  convert: function () {
    if (!this.isValidColor(this.data.originalColor)) {  //不合法
      this.setData({ isShow: true, rgbColor: ''});
    } else {
      var _arr;
      var _temp = this.data.originalColor;
      if (this.data.originalColor.length == 3) {
        _arr = _temp.split('');
        _arr=_arr.map(item=>parseInt(item+item,16));
      }else{
         _arr=_temp.match(/\S{2}/g);
         _arr = _arr.map(item => parseInt(item, 16));
      }
      this.setData({ rgbColor: _arr.toString(), isShow: false });
    }
  },
  change: function (e) {
    this.setData({ originalColor: e.detail.value });
  }
})