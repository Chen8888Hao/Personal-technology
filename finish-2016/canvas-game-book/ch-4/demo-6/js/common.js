(function() {
    // init(speed,divid,width,height,completeFunc,type)
    // speed 游戏速度
    // divid 传入一个div的ID
    // width 游戏界面宽度
    // height 游戏界面高度
    //  completeFunc 游戏初始化以后调用的函数
    var mylegend = init(50, 'mylegend', 500, 350, main);

    function main() {
        // alert('lufylengend start!');
        var layer = new LSprite();
        addChild(layer);
        layer.graphics.drawRect(1, '#000', [50, 50, 100, 100]);
        layer.graphics.drawRect(1, '#000', [170, 50, 100, 100], true, '#fff');
    }
})();
