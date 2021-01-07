export const SetSolidData = nodesData => {
  let data = nodesData.map(item => {
    if (item.labels == '标准词') {
      (item.attributes = { modularity_class: 0 }), (item.symbolSize = 50);
      item.itemStyle = { normal: { color: '#BD731A' } };
    } else {
      (item.attributes = { modularity_class: 1 }), (item.symbolSize = 30);
      item.itemStyle = { normal: { color: '#508F97' } };
    }
    return item;
  });
  return data;
};

export const SetLineData = relsData => {
  let data = relsData.map(item => {
    item.lineStyle = { normal: { width: 3 } };
    return item;
  });
  return data;
};
