import { LightningElement, wire } from 'lwc'; //Step 1: LWC & APEX >> Import wire adaptor reference

// Step 2: LWC & APEX >> Reference to APEX Class method
import fetchContracts from '@salesforce/apex/ContractController.getContractsForRenewal';

import fetchContractsByMonth from '@salesforce/apex/ContractController.getContractsForRenewalByMonth';


// Refresh APEX data when base data changes | Step 1: Import
import { refreshApex} from '@salesforce/apex';

export default class ExpiringContracts extends LightningElement {


    // Class property
    lstExpiringContracts;
    lstExpiringContractsWithRedirection;

    dataToRefresh; // cache burst

    monthOptions = [
        { label: 'January', value: 1 },{ label: 'February', value: 2 },{ label: 'March', value: 3 }, 
        { label: 'April', value: 4 }, { label: 'May', value: 5 },{ label: 'June', value: 6 },{ label: 'July', value: 7 },
        { label: 'August', value: 8 },{ label: 'September', value: 9 },{ label: 'October', value: 10 },{ label: 'November', value: 11 },
        { label: 'December', value: 12 }
        // Add options for all months as needed
    ];
    selectedMonth = new Date().getMonth() + 2;

    //Step 3: LWC & APEX >> Call APEX using wire
    // and store the result into a local variable of method
    /*  
    @wire(APEXMethodReferenceName, "send input parameters in JS Object format")
    use class property or method to store & process the output
    */
    // Both data and error are part of result class
    @wire(fetchContracts)
    processContractsData(result) 
    {
        // sanity check if data is found or not
        if (result.data) {

            this.dataToRefresh = result; // assign entire result class to a local variable
            refreshApex(this.dataToRefresh); 


            console.log('Data received from APEX::' + JSON.stringify(result.data));
            
            // Step 4: LWC & APEX >> Assign APEX result to class property
            this.lstExpiringContracts = result.data;

            // JS logic to loop thru the contract records
            // then add a new key value pair with acchref as key and value as '/id of the account"c/expiringContracts
            // read more abt JS spread operator & string interpolation
            this.lstExpiringContractsWithRedirection = this.lstExpiringContracts.map(result => ({ acchref: `/${result.Account.Id}`,...result }));
            console.log('Data received from APEX and added new key value pair::' + JSON.stringify(this.lstExpiringContractsWithRedirection));

        
        }
        else if (result.error) {
            console.log('Error received from APEX::' + result.error);
        }
    };


    handleMonthChange(event)
    {
        // Read the selectedmonth
        this.selectedMonth = event.detail.value;
        this.loadContracts();
    }

    loadContracts()
    {


        // Make a call to APEX method imperatively without wire adapter getContractsForRenewalByMonth 
        // Read the data
        // Display the data
        // Syntax: APEXMethodNAMe('send parameter in JS object format')
        fetchContractsByMonth({iMonth: this.selectedMonth})
        .then(
            (result) => { 
                console.log('Output from APEX ::' + JSON.stringify(result));

                this.lstExpiringContracts = result;
            }
        )  // if data is found
        .catch(
            (error) => {console.log('Error from APEX:: ' + error)}
        ); // if errored out
    }

       


}