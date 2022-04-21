// 布尔值Boolean：同JavaScript
let isDone: boolean = false

// 数字Number：同JavaScript
let decLiteral:number = 666; // 十进制
let hexLiteral:number = 0xf00d; // 十六进制
let binerayLiteral:number = 0b1010; // 二进制
let octalLiteral:number = 0o744; // 八进制
let bigLiteral:bigint = 100n;

// 字符串String：同JavaScript
let nameTs:string = 'bob'
nameTs = "smith";
// 字符串String-模板字符串
let namePer:string = `Gene`;
let agePer:number = 37;
let sentencePer:string = `Hello, my name is ${namePer}, age: ${agePer}`;
console.log(`模板字符串输出：${sentencePer}`);

// 数组Array：同JavaScript,有两种方式可以定义数组。 
// 数组Array-第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组
let listPer:number[] = [1,2,3];
// 数组Array-第二种方式是使用数组泛型，Array<元素类型>
let listSen:Array<number> = [1,2,3];

// 元组Tuple
// 元组Tuple-解释：元组类型允许表示一个已知元素数量和类型的数组
let tuplePer:[string, number];
tuplePer = ['hello', 10]
// tuplePer = [10, 'hello'] // 报错
console.log(`元组Tuple${tuplePer[0].substr(1)}`);
// console.log(tuplePer[1].substr(1)); // 报错：类型“number”上不存在属性“substr”。
// 当访问一个越界的元素，会报错
// tuplePer[3] = 'world'; // 不能将类型“"world"”分配给类型“undefined”
// console.log(tuplePer[5].toString()); // 长度为 "2" 的元组类型 "[string, number]" 在索引 "5" 处没有元素。
// tuplePer[6] = true; // 不能将类型“true”分配给类型“undefined”
// console.log(`元组越界${tuplePer[3]}`);

// 枚举Enum
// 枚举Enum-默认从0开始编号，也可以指定
enum Color { Red, Green, Blue }
let c:Color = Color.Green;
console.log(Color[2]);

enum ColorEnum { RedEnum = 1, GreenEnum, BlueEnum = 5 }
let colorEnumStr:string = Color[1];
console.log(colorEnumStr);

// Any

// Void

// Null和Undefined

// Never

// Object

// 类型断言

// 关于let