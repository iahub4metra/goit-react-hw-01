import css from "./transactionsHistory.module.css"
const TransactionHistory = ({ items }) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    return (
        <table className={css.transactionHistoryTable}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{capitalizeFirstLetter(item.type)}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default TransactionHistory