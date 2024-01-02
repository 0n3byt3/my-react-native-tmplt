//init Date methods
export const initDateMethods = () => {
  if(!Date.prototype.toFaString)
    Date.prototype.toFaString = function () {
      return this.toLocaleString('fa-IR').replace('،‏ ', ' ');
    }
};