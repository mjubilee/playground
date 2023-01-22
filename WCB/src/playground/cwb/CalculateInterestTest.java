package playground.cwb;

import static org.junit.Assert.assertEquals;

import java.time.LocalDate;

import org.junit.jupiter.api.Test;

public class CalculateInterestTest {

	CalculateInterest ci = new CalculateInterest();
	final double DELTA = 1e-15;
    
	@Test  
    public void monthDifferenceShouldBePositive(){  

		LocalDate existingMaturityDate = LocalDate.of(2047,2,14);
		LocalDate earlyRenewalDate = LocalDate.of(2023,6,14);

		int expectedResult = 284;
        assertEquals(expectedResult,ci.calculateMonthDifference(existingMaturityDate, earlyRenewalDate) );  
    }  
	 
	@Test  
    public void monthDifferenceShouldNotBeNegative(){  

		LocalDate existingMaturityDate = LocalDate.of(2047,2,14);
		LocalDate earlyRenewalDate = LocalDate.of(2023,6,14);

		int expectedResult = 284;
        assertEquals(expectedResult,ci.calculateMonthDifference(earlyRenewalDate,existingMaturityDate) );  
    }  

	@Test  
    public void outstandingPaymentShouldNotBePositive(){
		double bankPostedRate = 7.536;
		double annualInteresRate = 1.723;
		
		double pricipalBalanceOutstanding = 500289.58;
		
		LocalDate existingMaturityDate = LocalDate.of(2024,2,14);
		LocalDate earlyRenewalDate = LocalDate.of(2023,6,14);

		double expectedResult = 19387.888856933336;
        assertEquals(expectedResult,
        		ci.calculateInterestOustandingPayment(pricipalBalanceOutstanding, 
        				bankPostedRate - annualInteresRate,
        				ci.calculateMonthDifference(existingMaturityDate, earlyRenewalDate)) ,
        		DELTA);  
    }  
	
	@Test  
    public void outstandingPaymentShouldNotBeNegative(){
		double bankPostedRate = 7.536;
		double annualInteresRate = 9.723;
		
		double pricipalBalanceOutstanding = 500289.58;
		
		LocalDate existingMaturityDate = LocalDate.of(2024,2,14);
		LocalDate earlyRenewalDate = LocalDate.of(2023,6,14);

		double expectedResult = 0.0;
        assertEquals(expectedResult,
        		ci.calculateInterestOustandingPayment(pricipalBalanceOutstanding, 
        				bankPostedRate - annualInteresRate,
        				ci.calculateMonthDifference(existingMaturityDate, earlyRenewalDate)) ,
        		DELTA);  
    }  
	
	@Test  
    public void threeMonthsPenaltyShouldNotBePositive(){
		double annualInteresRate = 1.723;		
		double pricipalBalanceOutstanding = 500289.58;

		double expectedResult = 19387.888856933336;
        assertEquals(expectedResult,
        		ci.calculateThreeMonthsInterest(pricipalBalanceOutstanding, annualInteresRate) ,
        		DELTA);  
    }  
	

	@Test  
    public void threeMonthsPenaltyShouldNotBeNegative(){
		double annualInteresRate = -9.723;		
		double pricipalBalanceOutstanding = 500289.58;
		
		double expectedResult = 0.0;
        assertEquals(expectedResult,
        		ci.calculateThreeMonthsInterest(pricipalBalanceOutstanding, annualInteresRate) ,
        		DELTA);  
    }  
}
