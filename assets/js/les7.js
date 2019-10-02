//EINDOPDRACHT
//opdr 1
const laprounds = [
    {
        lapround: 55.99
    }, {
        lapround: 63.00
    }, {
        lapround: 63.01
    }, {
        lapround: 54.01
    }, {
        lapround: 62.79
    }, {
        lapround: 52.88
    }, {
        lapround: 53.10
    }, {
        lapround: 54.12
    }
];

// opdr 2
const teachers = [
    {
        name: "Loek",
        profession: "Teacher",
        brand: "Linux",
        hoursPerWeek: 10,
        salary: 300,
        salaryPerHour: function () {
            let salaryPerHour = this.salary / this.hoursPerWeek;
            return salaryPerHour
        }
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino",
        hoursPerWeek: 20,
        salary: 1000,
        salaryPerHour: function () {
            let salaryPerHour = this.salary / this.hoursPerWeek;
            return salaryPerHour
        }
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple",
        hoursPerWeek: 5,
        salary: 3000,
        salaryPerHour: function () {
            let salaryPerHour = this.salary / this.hoursPerWeek;
            return salaryPerHour
        }
    }
]

teachers.forEach(element => {
    console.log(`I have a ${element.profession} named ${element.name} and he likes to work on a ${element.brand} computer`);
});

//opdr 3

teachers.forEach(element => {
    console.log(element.salaryPerHour());
});