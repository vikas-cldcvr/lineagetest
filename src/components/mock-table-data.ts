import { faker } from "@faker-js/faker";
import { html } from "lit";
import type {
  FTableSchemaData,
  FTableSchemaDataRow,
  FTableSchemaCellObject,
} from "@cldcvr/flow-table";

export default function getFakeUsers(): FTableSchemaData {
  const users = [];

  // Generate 1000 mock user records
  for (let i = 0; i < 100; i++) {
    const person = faker.person;
    const firstName = person.firstName();
    const lastName = person.lastName();
    const email: FTableSchemaCellObject & { value: string } = {
      value: faker.internet.email(),
      template: function () {
        return html`<f-text inline state="warning">${this.value}</f-text>`;
      },
      actions: [
        {
          icon: "i-chat",
        },
        {
          icon: "i-mail",
        },
        {
          icon: "i-star",
        },
      ],
    };
    const mobile = faker.phone.number();
    const sex = person.sex();
    const age = faker.string.numeric(2);
    const birthDate: FTableSchemaCellObject & { value: Date } = {
      value: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
      template: function () {
        return html`<f-div gap="small" width="hug-content">
          <f-icon source="i-date-time"></f-icon>
          <f-text inline
            >${this.value.getDate()}-${this.value.getMonth()}-${this.value.getFullYear()}</f-text
          ></f-div
        >`;
      },
      toString: function () {
        return this.value.toString();
      },
    };

    const address = `${faker.location.street()}, ${faker.location.city()}, ${faker.location.stateAbbr()}, ${faker.location.zipCode()} ${faker.location.country()}`;

    const userRow: FTableSchemaDataRow = {
      data: {
        firstName,
        lastName,
        age,
        birthDate,
        email,
        mobile,
        sex,
        address,
      },
      details: function () {
        return html`<f-div padding="large"
          ><f-text state="danger">This is Details slot</f-text></f-div
        >`;
      },
    };
    users.push(userRow);
  }

  return {
    header: {
      firstName: { value: "First name", sticky: true },
      lastName: "Last name",
      age: "Age",
      birthDate: "Birth Date",
      email: "Email",
      mobile: "Mobile",
      sex: "Sex",
      address: {
        value: "Address",
        width: "300px",
        selected: true,
        sticky: true,
      },
    },
    rows: users,
  };
}
