const empty = (v: string) => {
    if (v == null || v == "undefined") {
      return true;
    }
    return v.toString().replace(/\s/g, '').length ? false : true
  };
  const email = (v: string) => (reg(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, v));
  const indianPhoneNo = (v: string) => (reg(/^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/, v));
  const landLineNo = (v: string) => (reg(/^(\d{5}([- ]*)\d{6})$/, v))
  const rupee = (v: number) => (v <= 99999999) ? false : true;
  const quantity = (v: number) => (v <= 9999) ? false : true;
  const number = (v: number, min: any, max: any) => {
    if (min === null && max === null) {
      return true
    }
    if (!isNumeric(v)) {
      return false;
    }
    return v < min || v > max ? false : true;
  };
  // TODO: find a better type for regex
  const reg = (reg: any, v: string) => {
    let err = true;
    if (reg.test(v)) {
      err = false;
    }
    return err;
  };
  const isNumeric = (v: any) => {
    return !isNaN(parseFloat(v)) && isFinite(v);
  };
  
  const isStringOnly = (v: any) => {
    return (/^[a-zA-Z]+$/.test(v));
  };
  
  
  const isStringNumericOnly = (v: any) => {
    let res = true;
    if ((/^([\w]+[0-9])$/.test(v))) {
      if (isNumeric(v)) {
        res = true
      } else {
        res = false
      }
    } else {
      if (isStringOnly(v)) {
        res = false
      }
    }
    return res;
  };
  
  const requiredArray = (v: any) => {
    return (v.length != 0) ? false : true;
  };
  
  const equal = (v: any, e: any) => {
    return (v == e) ? false : true;
  };
  
  const url = (v: any) => {
    try {
      if (empty(v)) {
        return false;
      }
      new URL(v);
      return false;
    } catch (err) {
      return true;
    }
  };
  
  const isFiles = (v: any, rule: string) => {
    // if (requiredArray(v)) {
    //   return [{ result: true }, { value: [] }];
    // }
    const result: boolean[] = [];
    const onlyimages: object[] = [];
  
    var allowedExtensions = /(\.txt)$/i;
    if (rule == "pdf") {
      allowedExtensions = /(\.pdf)$/i;
    } else if (rule == "doc") {
      allowedExtensions = /(\.doc|\.docx)$/i;
    } else if (rule == "excel") {
      allowedExtensions = /(\.xlsx|\.xls)$/i;
    } else if (rule == "csv") {
      allowedExtensions = /(\.csv)$/i;
    } else if (rule == "image") {
      allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.avif|\.webp)$/i;
    }
    //console.log(v);
    var rw = v.map((val: any) => {
      let chk = (allowedExtensions.exec(val.name) != null) ? true : false; //if false having error
      chk = (val.name.length > 100) ? false : chk; //if false having error
      result.push(chk); //chk should true
      if (chk) {
        onlyimages.push(val);
      }
    });
    return [{ result: result.indexOf(true) === -1 }, { value: onlyimages }] // result having true, then it equal to -1
  };
  
  
  const isBanner = (v: any, rule: string) => {
    const result: boolean[] = [];
    const onlybanners: object[] = [];
  
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.avif|\.webp)$/i;
  
    var rw = v.map((val: any) => {
      let chk = (allowedExtensions.exec(val.name) != null) ? true : false; //if false having error
      chk = (val.name.length > 100) ? false : chk; //if false having error
      result.push(chk); //chk should true
      if (chk) {
        onlybanners.push(val);
      }
    });
    return [{ result: result.indexOf(true) === -1 }, { value: onlybanners }] // result having true, then it equal to -1
  };
  
  const toCapitalize = (v: string) => {
    return v.charAt(0).toUpperCase() + v.slice(1);
  };
  
  const replaceUnderscore = (v: string) => {
    return v.replace("_", " ");
  };
  
  const hasErrorNaming = (v: string, v1: string) => {
    let str = "has" + toCapitalize(v) + toCapitalize(v1)
    return str;
    // return str.replace("_", "");
  }
  
  const makeArrayUnique = (v: any, index: any, array: any) => {
    return array.indexOf(v) === index;
  }
  
  
  interface Validator {
    [key: string]: Function;
  }
  
  const validator: Validator = {
    reg,
    empty,
    email,
    number,
    url,
    toCapitalize,
    replaceUnderscore,
    hasErrorNaming,
    indianPhoneNo,
    landLineNo,
    requiredArray,
    equal,
    isFiles,
    makeArrayUnique,
    isStringNumericOnly,
    isStringOnly,
    isBanner,
    rupee,
    quantity
  };
  export default validator;