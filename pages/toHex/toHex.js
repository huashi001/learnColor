Page({
  data: {
    r: 0,
    g:0,
    b:255,
    hexColor:'#0000ff',
    isShow: false
  },
  isValidColor: function (color) {
    console.log(color);
    if(color<256&&color>=0&&color!==''){
      return true;
    }
    return false;
  },
  convert: function () {
    if (!this.isValidColor(this.data.r) || !this.isValidColor(this.data.g) || !this.isValidColor(this.data.b)) {  //不合法
      this.setData({ isShow: true,hexColor:''});
    } else {
      var _arr = [this.data.r, this.data.g, this.data.b];
        _arr = _arr.map(item => (parseInt(item)).toString(16));
        _arr = _arr.map(item=>{
         return item.length==1?0+item:item;
        });
      this.setData({ hexColor: '#'+_arr.join(''), isShow: false });
    }
  },
  delZero:function(a){
    if(a===''){
      return '';
    }
    if(a===0){
      return 0;
    }
    return a.replace(/^0+/,'');
  },
  changeR: function (e) {
    this.setData({ r: this.delZero(e.detail.value) });
  },
  changeG:function(e) {
    this.setData({ g: this.delZero(e.detail.value) });
  },
  changeB: function (e) {
    this.setData({ b: this.delZero(e.detail.value) });
  }
})