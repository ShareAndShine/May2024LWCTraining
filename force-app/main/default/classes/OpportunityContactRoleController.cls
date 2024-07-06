public with sharing class OpportunityContactRoleController {
    public OpportunityContactRoleController() {

    }

    @AuraEnabled
    public static List<OpportunityContactRole> getContactRoles(String opportunityId) {
        List<OpportunityContactRole> contactRoles = new List<OpportunityContactRole>();  
        contactRoles = [SELECT Id, OpportunityId, Role, ContactId,
         Contact.Name, Contact.Title, Contact.Email, Contact.Contact_Image__c, Contact.Phone FROM OpportunityContactRole];
        return contactRoles;
    }
}