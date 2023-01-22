package playground.cwb;

import java.time.LocalDate;
import java.time.Period;

public class CalculateInterest {
	
	public double calculateThreeMonthsInterest(double outstanding, double interestRate) {
		return calculateInterestOustandingPayment(outstanding, interestRate, 3);
	}
	
	public double calculateInterestOustandingPayment(double outstanding,
			double rate,
			int period) {
		double result = ((outstanding * rate * 0.01) / 12) * period;
		return result < 0 ? 0 : result;
	}
	
	public int calculateMonthDifference(LocalDate maturityDate, LocalDate ancitipatedPayout) {		
		Period  dateDiff = Period.between(maturityDate, ancitipatedPayout);
		int yearDiff = Math.abs( dateDiff.getYears());
		int monthDiff = Math.abs( dateDiff.getMonths());
		return  (yearDiff * 12 ) + monthDiff;
	}
}
