
import Head from "next/head";
import Card from "../../components/Card";
import {TeamMembers} from './TeamMembers'

export const metadata = {
	title:'Our Team'
}

export default function OurTeamPage() {
	

	return (
		<div id="">
			
			<h1 className="text-center py-32  text-3xl md:text-5xl font-bold z-[10000]">Our Team Members</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-3">
				{TeamMembers.map((ele, index) => {
					return (
						<div key={index}>
							<Card ele={ele} index={index}  />
						</div>
					);
				})}
			</div>
		</div>
	);
}
