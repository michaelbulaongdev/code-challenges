function HouseKeeper (name, age, hasWorkPermit, yearsXP, skills) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.yearsXP = yearsXP;
    this.skills = skills;
    this.clean = function () {
        alert("Cleaning in progress...");
    }
}

var houseKeeper1 = new HouseKeeper("Brenda", 18, true, 5, ["cook", "clean", "babysit"]);
