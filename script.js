document.addEventListener('DOMContentLoaded', function(){
    const form = this.getElementById('form');
    form.addEventListener('submit', function(event){
        event.preventDefault();

        const amount = parseFloat(document.getElementById('amount').value);
        console.log('Mortgage Amount: ', amount);

        const term = parseFloat(document.getElementById('term').value);
        console.log('Mortgage Term: ', term);

        const rate = parseFloat(document.getElementById('rate').value);
        console.log('Mortgage Rate: ', rate);

        const type =  document.querySelector('input[name="type"]:checked').value;
        console.log('Type: ', type);

        const monthly_rate = (rate/100)/12;
        console.log('r:', monthly_rate);

        const no_of_payments = term*12;
        console.log('p:', no_of_payments);

        const monthly_repayment = ((amount * monthly_rate * ((1 + monthly_rate) ** no_of_payments)) / ((( 1 + monthly_rate) ** no_of_payments) - 1)).toFixed(2);
        const total_repayment = (monthly_repayment * no_of_payments).toFixed(2);
        const total_interest = (total_repayment - amount).toFixed(2);
        console.log('M:', monthly_repayment);
        console.log('T:', total_repayment);
        console.log('TR:', total_interest);

        let content = '';
        if(type === 'Repayment'){
            content = `
            <div class="h-100" style="background-color: #D9F7F7; border-bottom-left-radius: 80px;">
                        <div class="p-5 pt-4">
                            <h5>Your Results</h5>
                            <p>Your results are shown below based on the information you provided. To adjust the results, 
                                edit the form and click "calculate repayments" again.
                            </p>
                            <div class="container d-flex justify-content-center bg-danger p-0">
                                <div class="col-12 p-3 border-top border-2 border-warning text-white" style="background-color: #133040;">
                                    <p class="m-0">Your monthly repayments</p>
                                    <h4 style="color: #FDF530;">$${monthly_repayment}</h4>
                                    <hr>
                                    <p class="m-0">Total you'll repay over the term</p>
                                    <h6>$${total_repayment}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
            `;
        } else {
            content = `
            <div class="h-100" style="background-color: #D9F7F7; border-bottom-left-radius: 80px;">
                        <div class="p-5 pt-4">
                            <h5>Your Results</h5>
                            <p>Your results are shown below based on the information you provided. To adjust the results, 
                                edit the form and click "calculate repayments" again.
                            </p>
                            <div class="container d-flex justify-content-center bg-danger p-0">
                                <div class="col-12 p-3 border-top border-2 border-warning text-white" style="background-color: #133040;">
                                    <p class="m-0">Total interest</p>
                                    <h4 style="color: #FDF530;">$${total_interest}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
            `;
        }



        document.getElementById('result').innerHTML = content;
    })
})