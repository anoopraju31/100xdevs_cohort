const Table = () => {
	return (
		<table className='w-full text-sm text-black-30 font-medium'>
			<thead className='text-left'>
				<tr>
					<th className='px-3 py-[10px] bg-black-95 whitespace-nowrap rounded-s'>
						Order ID
					</th>
					<th className='px-3 py-[10px] bg-black-95 whitespace-nowrap'>
						Status
					</th>
					<th className='px-3 py-[10px] bg-black-95 whitespace-nowrap'>
						Transaction ID
					</th>
					<th className='px-3 py-[10px] bg-black-95 whitespace-nowrap'>
						Refund Date
					</th>
					<th className='px-3 py-[10px] bg-black-95 whitespace-nowrap text-right rounded-e'>
						Order Amount
					</th>
				</tr>
			</thead>
			<tbody>
				<TableBodyRow />
				<TableBodyRow />
				<TableBodyRow />
				<TableBodyRow />
				<TableBodyRow />
				<TableBodyRow />
				<TableBodyRow />
				<TableBodyRow />
				<TableBodyRow />
				<TableBodyRow />
			</tbody>
		</table>
	)
}

const TableBodyRow = () => {
	return (
		<tr className='border-b border-black-90'>
			<td className='px-3 py-[14px] whitespace-nowrap text-primary-blue'>
				#281209
			</td>
			<td className='px-3 py-[14px] whitespace-nowrap'>
				<div className='flex gap-[6px] items-center'>
					<div className='p-1 rounded-full bg-green'></div>
					<p className='text-black-12 font-inter'> Successful </p>
				</div>
			</td>
			<td className='px-3 py-[14px] whitespace-nowrap'> 131634495747 </td>
			<td className='px-3 py-[14px] whitespace-nowrap'> Today, 08:45 PM </td>
			<td className='px-3 py-[14px] whitespace-nowrap text-right'>₹1,125.00</td>
		</tr>
	)
}

export default Table
