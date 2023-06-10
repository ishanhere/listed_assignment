export const getOptions = (type, customWidth) => ({
  chart: {
    type,
    width: customWidth,
    height: 300,
  },
  title: {
    text: "",
  },

  yAxis: {
    title: {
      text: "Values",
    },
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6],
      color: "#9BDD7C",
    },
    {
      data: [2, 7, 0, 4, 6, 2],
      color: "#E9A0A0",
    },
  ],
});
