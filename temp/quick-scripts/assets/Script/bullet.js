(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/bullet.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '81be82YwS9L1LZYufVXSrCP', 'bullet', __filename);
// Script/bullet.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        xSpeed: cc.Integer, //x轴速度
        ySpeed: cc.Integer, //y轴速度
        hpDrop: cc.Integer //掉血

    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
    },

    //碰撞检测
    onCollisionEnter: function onCollisionEnter(other, self) {
        this.bulletGroup.bulletDied(self.node);
    },
    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this.bulletGroup.eState != D.commonInfo.gameState.start) {
            return;
        }
        this.node.x += dt * this.xSpeed;
        this.node.y += dt * this.ySpeed;

        if (this.node.y > this.node.parent.height) {
            this.bulletGroup.bulletDied(this.node);
        }
    }

});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=bullet.js.map
        