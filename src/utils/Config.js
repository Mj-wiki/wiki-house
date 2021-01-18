export const SetSolidData = nodesData => {
  if (!nodesData) {
    return;
  }
  //由霍乱弧菌埃尔托型引起的霍乱9966
  let data = nodesData.map(item => {
    //   if (item.labels[0] == "标准词") {
    //      (item.attributes = { modularity_class: 0 }),
    //     (item.symbolSize = 50);
    //     item.itemStyle = { normal: { color: '#5B5FFE' } };
    //   } else if (item.labels[0] == "原始词") {
    //     (item.attributes = { modularity_class: 1 }),
    //     (item.symbolSize = 50);
    //     item.itemStyle = { normal: { color: '#43AC61' } };
    //   } else if (item.properties.class == '顶级节点') {
    //     (item.attributes = { modularity_class: 0 }), (item.symbolSize = 180);
    //   }
    //   return item;
    // });
    if (item.labels[0] === '标准词') {
      (item.attributes = { modularity_class: 0 }), (item.symbolSize = 50);
      item.itemStyle = { normal: { color: '#5B5FFE' } };
    } else {
      (item.attributes = { modularity_class: 1 }), (item.symbolSize = 50);
      item.itemStyle = { normal: { color: '#43AC61' } };
    }
    if (item.properties.class == '顶级节点') {
      (item.attributes = { modularity_class: 0 }), (item.symbolSize = 90);
      // item.itemStyle = { normal: { color: '#F15D53' } };
    }
    return item;
  });
  return data;
};

export const SetLineData = relsData => {
  if (!relsData) {
    return;
  }
  let data = relsData.map(item => {
    item.lineStyle = { normal: { width: 3 } };
    return item;
  });
  return data;
};

export const randomString = (length = 8) => {
  var str = '0123456789';
  var result = '';
  for (var i = length; i > 0; --i)
    result += str[Math.floor(Math.random() * str.length)];
  return result;
};
