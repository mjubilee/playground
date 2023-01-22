package playground.cwb;

import java.time.LocalDate;

public class CWB {

	public static void main(String[] args) {	
		CalculateInterest ci = new CalculateInterest();
		double bankPostedRate = 7.536;
		double annualInteresRate = 11.723;
		
		double pricipalBalanceOutstanding = 500289.58;
		
		LocalDate existingMaturityDate = LocalDate.of(2024,2,14);
		LocalDate earlyRenewalDate = LocalDate.of(2023,6,14);
		
		System.out.println(ci.calculateMonthDifference(existingMaturityDate, earlyRenewalDate));

		
		System.out.println( "Three month penalty : " + ci.calculateThreeMonthsInterest(pricipalBalanceOutstanding, annualInteresRate) );
		System.out.println( "Interest rate differential : " + ci.calculateInterestOustandingPayment(pricipalBalanceOutstanding, 
				bankPostedRate - annualInteresRate,
				ci.calculateMonthDifference(existingMaturityDate, earlyRenewalDate)) );
		
	}

	
}
