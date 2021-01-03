import React from 'react'

const InfoCard = () => {
    const isIncome = Math.round(Math.random())
    return (
        <div style={{ textAlign: 'center', padding: '0 10%', color: '#757575' }}>
        Try Saying: <br />
        Add { isIncome ? 'Income ' : 'Expense ' } 
        of { isIncome ? '$100 ' : '$50 ' } dollars 
        category { isIncome ?  'Salary ' : 'Bills '}
        for {isIncome ?  'Monday ' : 'Tuesday ' }... 
        </div>
    )
}

export default InfoCard
