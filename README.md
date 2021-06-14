# docsify-evajs

> [docsify](https://github.com/docsifyjs/docsify)插件，可在markdown中嵌入[evajs](https://github.com/eva-engine/eva.js)游戏。

## 用法

1、在docsify项目根目录的index.html中增加本插件：
```
<script src="https://raw.githubusercontent.com/codetyphon/docsify-evajs/main/docsifyEva.js"></script>
```

2、在markdown文件中 增加一个canvas

```
<canvas id="canvas"></canvas>
```

3、在markdown文件中用```evajs标记evajs代码：

````
```evajs
console.log('demo')
EVA.resource.addResource([
  {
    name: 'img',
    type: EVA.RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url: 'https://gw.alicdn.com/bao/uploaded/TB1lVHuaET1gK0jSZFhXXaAtVXa-200-200.png'
      }
    },
    preload: true
  },
])
const game = new EVA.Game({
  frameRate: 60, // 可选，游戏帧率，默认60
  autoStart: true, // 可选，自动开始
  systems: [
    new EVA.plugin.renderer.RendererSystem({
      canvas: document.querySelector('#canvas'), // 可选，自动生成 canvas 挂在 game.canvas 上
      width: 300,
      height: 300,
      transparent: false,
      resolution: window.devicePixelRatio / 2, // 可选, 如果是2倍图设计 可以除以2
      enableScroll: true, // 允许页面滚动
      renderType: 0 // 0:自动判断，1: WebGL，2:Canvas，建议android6.1 ios9 以下使用Canvas，需业务判断。
    }),
    new EVA.plugin.renderer.img.ImgSystem(),
  ]
})
const image = new EVA.GameObject('image', {
  size: { width: 100, height: 100 },
  origin: { x: 0.5, y: 0.5 },
  position: {
    x: 150,
    y: 150,
  },
  anchor: {
    x: 0,
    y: 0,
  },
});

image.addComponent(
  new EVA.plugin.renderer.img.Img({
    resource: 'img',
  }),
);

game.scene.addChild(image);
```

````

Demo：[https://codetyphon.github.io/learn-evajs/](https://codetyphon.github.io/learn-evajs/)
