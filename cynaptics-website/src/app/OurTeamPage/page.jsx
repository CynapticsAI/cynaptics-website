
import Card from "../../components/Card";
import {TeamMembers} from './TeamMembers'

export const metadata = {
	title:'Our Team'
}

export default function OurTeamPage() {
	

	return (
		<div id="">
			
			<div className="grid md:grid-cols-2 lg:grid-cols-3">
				{TeamMembers.map((ele, index) => {
					return (
						<div key={index}>
							<Card ele={ele}  />
						</div>
					);
				})}
			</div>
		</div>
	);
}
