var s = `|L0011|0||BOOKED||To Be Paid Off|4453731.62|0|4||L0011|||L0011|MTG|44|CD|5.500%|09/01/16|04/28/06|44944.32|4650000|4453731.62|4650000<br>|L0013|0||BOOKED||Partial|102731.6|0|4||L0013|||L0013|MTG|44|CD|4.150%|11/01/15|01/15/07|2632.39|229004|102731.6|111768.94<br>|L0017|0||BOOKED||Other|11731845.23|0|4||L0017|||L0017|MTG|44|CD|6.025%|06/01/12|06/01/07|125463.07|14838606|11731845.23|14838606<br>|L0003|0||BOOKED|X|*|486636.93|0|4||L0003|||L0003|MTG|44|CD|5.450%|02/01/16|01/16/04|4440.97|1471875|486636.93|519009.7<br>|L0021|0||BOOKED||CashSecured|6268274.18|0|4||L0021|||L0021|MTG|44|CD|0.750%|01/01/13|01/31/11|48689.83|6740078|6268274.18|6384189.98<br>`;

var rows = s.split("<br>");

if ( rows[rows.length-1].length === 0 ){
 rows.pop();
}
var data = [];
for (row of rows) {
  var column = row.split("|");
  data.push(column);
}
const coloumnSorted = 1;

const bubleData = [...data];
function BubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++){
        for(let j = 0; j < len-1; j++) {
            if (arr[j][coloumnSorted] > arr[j+1][coloumnSorted]) {
                let swap = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = swap;
            }
        }
    }
}
const sortedData = BubbleSort(bubleData);
console.log(bubleData);


data.sort( (a,b) => {
  if (a[coloumnSorted] > b[coloumnSorted]) return 1;
  if (a[coloumnSorted] < b[coloumnSorted]) return -1;
  return 0;
});
console.log(data);

const threshold = 1000000.00;
const coloumnFiltered = 7;
data.filter((limit) => {
  if (limit[coloumnFiltered] < 1000000.00){
    console.log(limit[coloumnFiltered]);
    return true;
  }
  return false;
});



