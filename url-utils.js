// Write your package code here!
URLUtils = {
  isImage: function URLUtilsIsImage(string){
      return /^(https|http):\/\/.+\.(gif|png|jpg|jpeg|svg)$/i.test(string);
  }
};