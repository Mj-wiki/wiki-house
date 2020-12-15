/* eslint-disable */
var echarts = require('echarts');

// function getShallow(model, path) {
//     return model && model.getShallow(path);
// }

echarts.extendChartView({
  type: 'wordCloud',

  render: function(seriesModel, ecModel, api) {
    var group = this.group;
    // group.removeAll();
    // console.log(seriesModel.option, seriesModel.getData(), group)

    // 三种添加方式
    /**
     * 1. 原来不存在的，后来存在了，缓慢出现
     * 2. 原来存在的，后来也存在，唯一且变化
     * 3. 原来存在的，后来消失了，缓慢消失
     */
    var data = seriesModel.getData();
    group.eachChild(function(item) {
      // console.log(item, data.indexOfName(item.name) < 0)
      if (data.indexOfName(item.name) < 0) {
        item.animateTo(
          {
            style: {
              opacity: 0,
            },
          },
          function() {
            group.remove(item);
          },
        );
      }
    });

    var gridSize = seriesModel.get('gridSize');
    var index = 0;
    // console.log(group.childCount())
    seriesModel.layoutInstance.ondraw = function(text, size, dataIdx, drawn) {
      var itemModel = data.getItemModel(dataIdx);
      // console.log(itemModel)
      var textStyleModel = itemModel.getModel('textStyle.normal');
      var emphasisTextStyleModel = itemModel.getModel('textStyle.emphasis');
      var prevEl = group.childOfName(text);

      var textEl =
        prevEl ||
        new echarts.graphic.Text({
          name: text,
          style: echarts.graphic.setTextStyle({}, textStyleModel, {
            opacity: 0,
            x: drawn.info.fillTextOffsetX,
            y: drawn.info.fillTextOffsetY + size * 0.5,
            text: text,
            textBaseline: 'middle',
            textFill: data.getItemVisual(dataIdx, 'color'),
            fontSize: size,
          }),
          scale: [1 / drawn.info.mu, 1 / drawn.info.mu],
          position: [
            (drawn.gx + drawn.info.gw / 2) * gridSize,
            (drawn.gy + drawn.info.gh / 2) * gridSize,
          ],
          rotation: 0,
        });
      index++;
      // console.log(text, size, index)
      textEl.animateTo({
        style: echarts.graphic.setTextStyle({}, textStyleModel, {
          opacity: 1,
          x: drawn.info.fillTextOffsetX,
          y: drawn.info.fillTextOffsetY + size * 0.5,
          text: text,
          textBaseline: 'middle',
          textFill: data.getItemVisual(dataIdx, 'color'),
          fontSize: size,
        }),
        scale: [1 / drawn.info.mu, 1 / drawn.info.mu],
        position: [
          (drawn.gx + drawn.info.gw / 2) * gridSize,
          (drawn.gy + drawn.info.gh / 2) * gridSize,
        ],
        rotation: drawn.rot,
      });
      if (!prevEl) {
        group.add(textEl);
      }

      data.setItemGraphicEl(dataIdx, textEl);

      echarts.graphic.setHoverStyle(
        textEl,
        echarts.graphic.setTextStyle(
          {},
          emphasisTextStyleModel,
          null,
          { forMerge: true },
          true,
        ),
      );
    };

    this._model = seriesModel;
  },

  remove: function() {
    this.group.removeAll();

    this._model.layoutInstance.dispose();
  },

  dispose: function() {
    this._model.layoutInstance.dispose();
  },
});
