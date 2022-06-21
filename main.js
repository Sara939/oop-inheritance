// 1:
// class Student{
//     constructor(name, grade, studentid){
//         this.name= name;
//         this.grade= grade;
//         this.studentid= studentid;
//     }
// }
// 2:
// let student1= new Student("sara", "n", 203876589);
// const student2= new Student("bela", "n", 304859709)
// console.log(student1,student2);
// // 3:
// class Collegestudent extends Student{
// }
// // 4:
// const college1= new Collegestudent("sisi", "b", 847563857)
// console.log(college1);
// // 5:
// class Highschoolstudent extends Student{
// }
// // 6:
// let highschool= new Highschoolstudent("nana", "b", 645290765);
// console.log(highschool);
// 7:
// class Highschoolstudent extends Student{
//     constructor(name, grade, studentid, age, lastname){
//         super(name, grade, studentid);
//         this.age= age;
//         this.lastname= lastname;
//     }
// }
// 8:
// let myhighschoolstu= new Highschoolstudent("nana", "b", 645290765, 30, "lili");
// console.log(myhighschoolstu);
// // 9:
// class Middlesschoolstudent extends Student{
// }
// let middlestudent= new Middlesschoolstudent("TITI", "b", 645290765, 30, "KIKI");
// console.log(middlestudent);
// 10:
class Student{
    constructor(name, grade, studentid){
        this.name= name;
        this.grade= grade;
        this.studentid= studentid;
    }
    printinfo(){
        console.log(this.name);
    }
}
// 11:
class Middlesschoolstudent extends Student{
    super.printinfo
}

let newmiddlestudent= new Middlesschoolstudent ("Sara", "n", 293746587);



//questions 14-25 on "classes" repositoery////////////////////////////////////////////////////////////////////