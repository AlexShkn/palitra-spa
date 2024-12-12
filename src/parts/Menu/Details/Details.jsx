import Image from 'next/image'
import Address from './Address'
import MailLink from './MailLink'
import Schedule from './Schedule'

const Details = (classStyle) => {
	return (
		<div className="details">
			<Schedule />
			<Address classStyle={classStyle} />
			<MailLink />
		</div>
	)
}

export default Details
