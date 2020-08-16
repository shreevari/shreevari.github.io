class Name {
  constructor(name) {
    this.prefix = name.prefix;
    this.firstName = name.firstName;
    this.middleName = name.middleName;
    this.lastName = name.lastName;
  }
  fullName() {
    return `${this.prefix !== "" ? this.prefix + " " : ""}${this.firstName}${
      this.middleName !== "" ? " " + this.middleName : ""
    } ${this.lastName}`;
  }
  informalName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default Name;
