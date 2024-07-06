public with sharing class ContractController {
    public ContractController() {

    }

    @AuraEnabled(cacheable=true) // Now this methof can be called from LWC
    public static List<Contract> getContractsForRenewal()
    {

        // Calculate the start and end date for next month
        Date startDate = Date.today().addMonths(1).toStartOfMonth();
        Date endDate = startDate.addDays(Date.daysInMonth(startDate.year(), startDate.month()) - 1);
        List<Contract> lstcontracts = new List<Contract>();

        try {
        
            // Query contracts due for renewal next month
        lstcontracts = [SELECT Id, Account.Id, Account.Name, Description, StartDate, EndDate
                                    FROM Contract
                                    WHERE EndDate >= :startDate AND EndDate <= :endDate];
            

        
        }
         catch (Exception ex) {
            
            throw new AuraHandledException(ex.getMessage());
        }

        return lstcontracts;
    }


    @AuraEnabled(cacheable=true) // Now this methof can be called from LWC
    public static List<Contract> getContractsForRenewalByMonth(Integer iMonth)
    {

        // Calculate the start and end date for next month
        Date startDate =  Date.newInstance(Date.today().year(), iMonth, 1);       
        Date endDate = startDate.addMonths(1).addDays(-1);

        List<Contract> lstcontracts = new List<Contract>();

        try {
        
            // Query contracts due for renewal next month
        lstcontracts = [SELECT Id, Account.Id, Account.Name, Description, StartDate, EndDate
                                    FROM Contract
                                    WHERE EndDate >= :startDate AND EndDate <= :endDate];
            

        
        }
         catch (Exception ex) {
            
            throw new AuraHandledException(ex.getMessage());
        }

        return lstcontracts;
    }

}