import gql from "graphql-tag";

export default gql(`
mutation createEmpoyeeTable($input: CreateEmpoyeeTableInput!){
  createEmpoyeeTable(input: $input) {
    id 
    name
    email
    mobile_number
  }
}`);
