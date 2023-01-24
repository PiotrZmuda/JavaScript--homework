const people = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
  },
  {
    firstName: "Mateo",
    lastName: "Loza",
  },
];

function nickName(array) {
  return array.map(function (value) {
    const mappedName = value.firstName.substring(0, 3).split("").reverse().join("");
    const mappedSurname = value.lastName.slice(-3).split("").reverse().join("");
    nameSurname = mappedName + mappedSurname;
    const result = nameSurname[0].toUpperCase() + nameSurname.substring(1).toLowerCase()
    console.log(result);
  });
}

nickName(people);

