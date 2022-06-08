
const display = document.querySelector('.screen');
const keys = document.querySelector('.container1');

let displayValue = '0'; //screen de çıkacak değeri tanımladık başlangıç değeri 0
updateDisplay();

function updateDisplay(){
   display.value = displayValue;
}

///**********part1 definition of buttons */


keys.addEventListener('click', function(event){
   const element = event.target;

   if (!element.matches('button')) return; // button olmayan elemanları çalıştırma  
  
   if (element.classList.contains('operator')){
      console.log('operator', element.value);
      return;
   } // operatörlerin tanımlanması 
   
   if (element.classList.contains('clear')){
      // console.log('clear', element.value);
      inputClear();
      updateDisplay();
      return;
   } // clear tanımlanması 
   
   if (element.classList.contains('negative')){
      // console.log('negative', element.value);
      inputNegative();
      updateDisplay();
      return;
   } // to negative definition 
   
   if (element.classList.contains('percentage')){
      // console.log('percentage', element.value);
      inputPercentage();
      updateDisplay();
      return;
   } // opercentage definition
   
   if (element.classList.contains('decimal')){
      // console.log('decimal', element.value);
      inputDecimal();
      updateDisplay();
      return;
   } // decimal definition
   
   if (element.classList.contains('equal')){
      console.log('equal', element.value);
     
      return;
   } // equal  definition

   inputNumber(element.value);
   updateDisplay();
   
}); // tuşların sadece geçerli olması için yapıldı


//******** printing the values of the keys in the input part */

function inputNumber(num){
   displayValue = displayValue === '0' ? num: displayValue + num; //if display value equals to 0 write the number othervise write the other side by other number
}

function inputDecimal(){
   if(!displayValue.includes('.')){
      displayValue += "."
   }
}

function inputClear(){
   displayValue = '0';
}

function inputNegative(){
   displayValue = displayValue*-1;
}

function inputPercentage(){
   displayValue = displayValue/100;
}