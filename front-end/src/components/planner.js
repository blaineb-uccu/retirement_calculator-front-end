import React, { useState } from 'react';
import { retirementBalance, pmtCalc } from './calculations'
import { connect } from "react-redux";

import { updateYwr, updateInflation, updateAllowance, updateN, updateMagicNum, updatePV, updateI, updateExpenses, updateSalary } from '../actions/CalcActions'
import SlideShow from './slideShow';


function Planner(props) {

    const [pmt, setPmt] = useState();
    const [income, setIncome] = useState();
    const [taxRate, setTaxRate] = useState();

    const changeHandler = (e) => {
        switch (e.target.name) {
            case 'allowance':
                return props.updateAllowance(e.target.value);
            case 'ywr':
                return props.updateYwr(e.target.value);
            case 'inflation':
                return props.updateInflation(e.target.value);
            case 'years':
                return props.updateN(e.target.value);
            case 'pv':
                return props.updatePV(e.target.value);
            case 'i':
                return props.updateI(e.target.value);
            case 'expenses':
                return props.updateExpenses(e.target.value);
            case 'salary':
                return props.updateSalary(e.target.value);
            default:
                console.log('something wrong:', e.target.name);
        }
    }


    // const submitHandler = (n) => {
    //     n.preventDefault()
    //     props.updateMagicNum(retirementBalance(
    //         parseFloat(props.state.allowance),
    //         parseFloat(props.state.ywr),
    //         parseFloat(props.state.n),
    //         parseFloat(props.state.inflation)
    //     ))
    // }

    const incomeCalculator = () => {
        console.log(pmt,props.state.expenses)
        setIncome((parseInt(pmt) + parseInt(props.state.expenses)) * 12)
    }

    function totalIncomeCalculator(desiredTakehomePay, taxRate) {
        taxRate = parseInt(taxRate)/100
        console.log(desiredTakehomePay, taxRate)
        if (desiredTakehomePay <= 0 || taxRate <= 0 || taxRate >= 1) {
          return null;
        }
      
        const totalIncome = desiredTakehomePay / (1 - taxRate);
      
        return parseFloat(totalIncome.toFixed(2));
      }
      

    const getPmt = () => {
        setPmt(pmtCalc(props.state.pv, props.state.magicNum, props.state.i, props.state.n))
    }

    const formatNumber = (n) => {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    return (
        <>
            
    
            <h2>Retirement Planning</h2>
            
            {
                props.state.magicNum !== 0 ?
            <div>
            <p>for you to retire with ${props.state.allowance} a month </p>
            <p>in {props.state.n} years</p>
            <p>with an average inflation rate of %{props.state.inflation}</p>
            <p>and a yearly withdrawal rate of %{props.state.ywr}</p> 
            <p>you will need <span className="emphasize">${formatNumber(props.state.magicNum)}.</span></p> 
            </div>
            :
            <SlideShow />
            }
            

            {/* <form onSubmit={submitHandler}>
                <input name='allowance' placeholder='Desired Monthly Allowance' onChange={changeHandler} value={props.state.allowance} />
                <input name='ywr' placeholder='Yearly Withdrawal Rate' onChange={changeHandler} value={props.state.ywr} />
                <input name='years' placeholder='Number of Years' onChange={changeHandler} value={props.state.n} />
                <input name='inflation' placeholder='Expected Average Inflation Rate' onChange={changeHandler} value={props.state.inflation} />
                <button>calculate</button>
            </form>
            <div>
                {props.state.magicNum > 0 ? <p>you will need ${props.state.magicNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} to retire.</p> : <></>}
            </div> */}
            <div>
                {
                props.state.magicNum > 0 ?
                    <div>
                        <p>How much do I need to contribute monthly to reach this goal?</p>
                        <div><label>how much you have saved now: </label><input name='pv' placeholder='How much you have now' onChange={changeHandler} value={props.state.pv} /></div>
                        <div><label>expected average rate of return: </label><input name='i' placeholder='Average Yearly Rate(%)' onChange={changeHandler} value={props.state.i} /></div>
                        <button onClick={getPmt}>get monthly contribution</button>
                    </div>
                    : null
                }
            </div>

            {pmt ? <p>To retire in {props.state.n} years, you need to contribute <span className="emphasize">${formatNumber(pmt)}</span> monthly.</p> : null}
            { pmt ? 
                <div>
                    <div>What does your current income need to be in order to retire in {props.state.n} years?</div>
                    <div><label>What are your current monthly expenses: </label><input name='expenses' placeholder='$' onChange={changeHandler} value={props.state.expenses} /></div>
                    <div><label>what percent of your money will go to taxes: </label><input name='taxes' placeholder='%' onChange={(e) => setTaxRate(e.target.value)} value={taxRate} /></div>
                    <button onClick={incomeCalculator}>Get current needed income</button>
                </div>
                : null
            }
            {
                income ? 
                <p>you will need a yearly salary of <span className="emphasize">${formatNumber(totalIncomeCalculator(income, taxRate))}</span></p> :null
            }
        </>
    );
}

const mapPropsToState = state => {
    return { state: state };
};

export default connect(
    mapPropsToState,
    {
        updateYwr,
        updateInflation,
        updateAllowance,
        updateN,
        updateMagicNum,
        updatePV,
        updateI,
        updateExpenses,
        updateSalary,
    })(Planner);