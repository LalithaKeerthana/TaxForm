// src/TaxForm.js
import React, { useState } from 'react';
import './styles.css';
  import './TaxForm.css';
  
  const TaxForm = () => {
    const [salaryGrossPay, setSalaryGrossPay] = useState('');
  const [dividendIncome, setDividendIncome] = useState('');
  const [standardDeduction, setStandardDeduction] = useState(50000);  const [regime, setRegime] = useState('old');
  const [_80C, set_80C] = useState(0);
  const [gratuity, setGratuity] = useState(0);
  const [leaveEncashment, setLeaveEncashment] = useState(0);
  const [internet, setInternet] = useState(0);
  const [otherAllowance, setOtherAllowance] = useState(0);
  const [hra, setHra] = useState(0);
  const [profTax, setProfTax] = useState(0);
  const [_80GCap, set_80GCap] = useState(0);
  const [E80G, setE80G] = useState(0);
  const [totalIncomeAfterCharityContribution, setTotalIncomeAfterCharityContribution] = useState(0);
  const [taxLiabilityAfterCharityContribution, setTaxLiabilityAfterCharityContribution] = useState(0);
  const [taxSave, setTaxSave] = useState(0);
  const [taxDeductions, setTaxDeductions] = useState(0);
  
  const totalTaxableIncome = () => {
    if (regime === 'old') {
      return (
        parseFloat(salaryGrossPay) +
        parseFloat(dividendIncome) -
        parseFloat(standardDeduction) -
        parseFloat(gratuity) -
        parseFloat(leaveEncashment) -
        parseFloat(internet) -
        parseFloat(otherAllowance) -
        parseFloat(hra) -
        parseFloat(profTax) -
        parseFloat(_80C)
      );
    } else if (regime === 'new') {
      return (
        parseFloat(salaryGrossPay) +
        parseFloat(dividendIncome) -
        parseFloat(standardDeduction) -
        parseFloat(_80C)

        
      );
    }
    return 0; // Default value if neither regime is matched
  };
    return (
      <div className='taxform'>
        <div className="container mx-auto my-4">
          <form>
            <div className="bg-black p-4 border rounded" style={{ color: 'white' }}>
              {/* Row 1 */}
              <div className="row mb-3">
                <div className="col p-3">
                  <label htmlFor="SGP">Salary Gross Pay</label>
                  <input
                    type="text"
                    id="SGP"
                    className="form-control"
                    placeholder="Field 1"
                    value={salaryGrossPay}
                    onChange={(e) => setSalaryGrossPay(e.target.value)}
                  />
                </div>
                <div className="col p-3">
                  <label htmlFor="DI">Dividend Income</label>
                  <input
                    type="text"
                    id="DI"
                    className="form-control"
                    placeholder="Field 2"
                    value={dividendIncome}
                    onChange={(e) => setDividendIncome(e.target.value)}
                  />
                </div>
             
              <div className="col p-3">
                <label htmlFor="totalTaxableIncome">Total Taxable Income:</label>
                <input
                  type="text"
                  id="totalTaxableIncome"
                  className="form-control"
                  placeholder="Calculated Total Taxable Income"
                  value={totalTaxableIncome()}
                  readOnly // Make it readOnly to prevent user input
                />
              </div>
            <div className="col p-3">
              <label htmlFor="TL">Tax Liability(with cess)</label>
              <input type="text" id="TL" className="form-control" placeholder="Field 4" />
            </div>
            </div>
  
            {/* Row 2 */}
            {/* Row 2 */}
<div className="row mb-3">
  <div className="col p-3">
    <label htmlFor="SD">Standard Deduction</label>
    <input
      type="text"
      id="SD"
      className="form-control"
      placeholder="Field 1"
      value={standardDeduction}
      readOnly
    />
  </div>

              <div className="col p-3">
    <label htmlFor="80C">80CCD</label>
    <input
      type="text"
      id="80C"
      className="form-control"
      placeholder="Field 2"
      value={_80C}
      onChange={(e) => set_80C(e.target.value)}
    />
  </div>
  <div className="col p-3">
    <label htmlFor="GR">GRATUITY</label>
    <input
      type="text"
      id="GR"
      className="form-control"
      placeholder="Field 3"
      value={gratuity}
      onChange={(e) => setGratuity(e.target.value)}
    />
  </div>
  <div className="col p-3">
    <label htmlFor="LE">Leave Enchasement</label>
    <input
      type="text"
      id="LE"
      className="form-control"
      placeholder="Field 4"
      value={leaveEncashment}
      onChange={(e) => setLeaveEncashment(e.target.value)}
    />
  </div>
</div>

{/* Row 3 */}
<div className="row mb-3">
  <div className="col p-3">
    <label htmlFor="INTERNET">Internet</label>
    <input
      type="text"
      id="INTERNET"
      className="form-control"
      placeholder="Field 1"
      value={internet}
      onChange={(e) => setInternet(e.target.value)}
    />
  </div>
  <div className="col p-3">
    <label htmlFor="OtherA">Other Allowance</label>
    <input
      type="text"
      id="OtherA"
      className="form-control"
      placeholder="Field 2"
      value={otherAllowance}
      onChange={(e) => setOtherAllowance(e.target.value)}
    />
  </div>
  <div className="col p-3">
    <label htmlFor="HRA">HRA/Sec 10</label>
    <input
      type="text"
      id="HRA"
      className="form-control"
      placeholder="Field 3"
      value={hra}
      onChange={(e) => setHra(e.target.value)}
    />
  </div>
  <div className="col p-3">
    <label htmlFor="PT">Prof Tax</label>
    <input
      type="text"
      id="PT"
      className="form-control"
      placeholder="Field 4"
      value={profTax}
      onChange={(e) => setProfTax(e.target.value)}
    />
  </div>
            </div>
  
            {/* Row 4 */}
            <div className="row mb-3">
  <div className="col p-3">
    <label htmlFor="80G-Cap">80G Cap</label>
    <input
      type="text"
      id="80G-Cap"
      className="form-control"
      placeholder="Field 1"
      value={_80GCap}
      onChange={(e) => set_80GCap(e.target.value)}
    />
  </div>
  <div className="col p-3">
    <label htmlFor="E80G">E80G</label>
    <input
      type="text"
      id="E80G"
      className="form-control"
      placeholder="Field 2"
      value={E80G}
      onChange={(e) => setE80G(e.target.value)}
    />
  </div>
</div>

{/* Row 5 */}
<div className="row mb-3">
  <div className="col p-3">
    <label htmlFor="TIAC">Total income after Charity contribution</label>
    <input
      type="text"
      id="TIAC"
      className="form-control"
      placeholder="Field 1"
      value={totalIncomeAfterCharityContribution}
      readOnly
    />
  </div>
  <div className="col p-3">
    <label htmlFor="TLAC">Tax Liability after Charity contribution(with cess)</label>
    <input
      type="text"
      id="TLAC"
      className="form-control"
      placeholder="Field 2"
      value={taxLiabilityAfterCharityContribution}
      readOnly
    />
  </div>
  <div className="col p-3">
    <label htmlFor="TS">Tax Save</label>
    <input
      type="text"
      id="TS"
      className="form-control"
      placeholder="Field 3"
      value={taxSave}
      readOnly
    />
  </div>
  <div className="col p-3">
    <label htmlFor="TD">Tax Deductions</label>
    <input
      type="text"
      id="TD"
      className="form-control"
      placeholder="Field 4"
      value={taxDeductions}
      readOnly
    />
  </div>
</div>
          </div>
        </form>
       
      </div>
     
      </div>
      
    );
  };
  
 
  export default TaxForm;
