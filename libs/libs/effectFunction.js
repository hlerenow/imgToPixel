export default {
  Gray: function Gray(x, y, color) {
    var gray = color.r * 0.299 + color.g * 0.587 + color.b * 0.118;
    color.r = gray;
    color.g = gray;
    color.b = gray;
    return color;
  }
};