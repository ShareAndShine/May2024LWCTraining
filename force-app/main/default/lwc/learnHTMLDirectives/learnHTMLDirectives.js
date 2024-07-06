import { LightningElement } from 'lwc';

export default class LearnHTMLDirectives extends LightningElement {

    // class property
    showGreetings;

    lstofNames;
    lstofContracts;

    lstofContractsToDisplay;


    // class method
    DisplayGreetings() {
        this.showGreetings = true;
    }

    HideGreetings() {
        this.showGreetings = false;
    }

    showDetails() {
        // [] to represent list of data in arrays
        this.lstofNames = ['Rajesh', 'Deepak', 'Sonali', 'Avinash'];
        

        // {} to represent data in JS object format
        // data is in key value pair

        let user1 = { 'E1mpCode': 111, EmpName: 'Rajesh', Designation: 'Developer', Department: 'IT', Salary: 100000 };
        let user2 = { 'E1mpCode': 222, EmpName: 'Avinash', Designation: 'Sr. Developer', Department: 'IT', Salary: 200000 };


        let lslusers = [user1, user2];

        // list of contracts that are due for renewal
        this.lstofContracts = [
            { Id: '1029384949', AccName: 'Palm Tree Industries', Description: 'Support Contract', StartDate: '2020-01-01', EndDate: '2020-02-01' },
            { Id: '453429384949', AccName: 'Neem Tree Industries', Description: 'Service Contract', StartDate: '2020-01-01', EndDate: '2020-02-01' },
            { Id: '145454384949', AccName: 'Orion Industries', Description: 'Proposal Contract', StartDate: '2020-01-01', EndDate: '2020-02-01' }
        ];

        // convert an obj to a string
        this.lstofContractsToDisplay = JSON.stringify(this.lstofContracts);
    }

    // JS Arrays and Objects

}