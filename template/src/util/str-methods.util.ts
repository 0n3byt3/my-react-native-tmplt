//init String methods
export const initStrMethods = () => {
  if(!String.prototype.toIndiaDigit)
    String.prototype.toIndiaDigit = function () {
      let indiaDigit= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
      return this.replace(/[0-9]/g, (w) => {
          return indiaDigit[+w]
      });
    }

  if(!String.prototype.toEngDigit)
    String.prototype.toEngDigit = function () {
      let str: string = this.toString();
      let indiaDigit= [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
      let arabicDigit= [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
      for(let i=0; i<10; i++)
      {
          str = str.replace(indiaDigit[i], i + '').replace(arabicDigit[i], i + '');
      }
      return str;
    };
};