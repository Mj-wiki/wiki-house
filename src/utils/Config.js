export const SetSolidData = nodesData => {
  if (!nodesData) {
    return;
  }
  let data = nodesData.map(item => {
    console.log(item);
    if (item.labels == '标准词') {
      (item.attributes = { modularity_class: 0 }), (item.symbolSize = 50);
      item.itemStyle = { normal: { color: '#43AC61' } };
    } else {
      (item.attributes = { modularity_class: 1 }), (item.symbolSize = 30);
      item.itemStyle = { normal: { color: '#5B5FFE' } };
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
