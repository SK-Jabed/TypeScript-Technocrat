{
  //
  const arrOfNumbers: number[] = [5, 10, 15, 20];

  const arrOfStrings: string[] = arrOfNumbers.map((number) =>
    number.toString()
  );

  console.log(arrOfStrings);

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; // look up type
  // type AreaString = {
  //   height: string;
  //   width: string
  // }
  // keyof AreaNumber => "height"|"width"

  // T => {height:string;width:number}
  // key => T["width"]
  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };
  //
}
