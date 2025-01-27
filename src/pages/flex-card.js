import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowLeft,
	faArrowRight,
	faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Card from "@/components/Card";

const placeholderDescription =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const steps = [
	{
		title: "Identify Your End Goal",
		description:
			"Identify your objective and break it down into small pieces. I like to mentally envision the card as boxes.\n\n" +
			"In this step, you should visualize the structure of the card. The card consists of:\n" +
			"- An image at the top\n" +
			"- A content section with:\n" +
			"  - A top row (username and likes)\n" +
			"  - A title\n" +
			"  - A description\n" +
			"  - A tags section\n\n" +
			"Visualizing the card as boxes helps in structuring the layout using Flexbox.",
	},
	{
		title: "Create the Card Container",
		description:
			"Define the main wrapper of the card using a `div` with the class `card`.\n\n" +
			'<div className="card">\n' +
			"  <!-- Content will go here -->\n" +
			"</div>\n" +
			"\n" +
			"Add basic styling to the card container, such as a box shadow, to give it a card-like appearance.\n\n" +
			".card {\n" +
			"  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);\n" +
			"}\n",
	},
	{
		title: "Add the Image",
		description:
			"Add an image to the card using an `img` tag.\n\n" +
			'<img src="images/penguin.jpeg" alt="penguin" />\n' +
			"\n" +
			"Style the image to ensure it fits well within the card:\n\n" +
			"img {\n" +
			"  display: block;\n" +
			"  width: 100%;\n" +
			"  max-height: 200px;\n" +
			"  aspect-ratio: 1/1;\n" +
			"  object-fit: cover;\n" +
			"}\n" +
			"\n" +
			"This ensures the image is responsive and maintains its aspect ratio.",
	},
	{
		title: "Create the Card Content Section",
		description:
			"Add a `div` with the class `card-content` to hold all the content below the image.\n\n" +
			'<div className="card-content">\n' +
			"  <!-- Content will go here -->\n" +
			"</div>\n" +
			"\n" +
			"Use Flexbox to arrange the content in a column layout:\n\n" +
			".card-content {\n" +
			"  display: flex;\n" +
			"  flex-direction: column;\n" +
			"  gap: 16px;\n" +
			"  padding: 16px;\n" +
			"}\n" +
			"\n" +
			"This creates a vertical layout with spacing between elements.",
	},
	{
		title: "Add the Top Row (Username and Likes)",
		description:
			"Create a `div` with the class `top-row` to hold the username and likes section.\n\n" +
			'<div className="top-row">\n' +
			'  <p className="username">posted by: <span className="bold">cool_username_cool_username</span></p>\n' +
			'  <div className="likes">\n' +
			"    <!-- Like icons will go here -->\n" +
			"  </div>\n" +
			"</div>\n" +
			"\n" +
			"Use Flexbox to align the username and likes horizontally and add space between them:\n\n" +
			".top-row {\n" +
			"  display: flex;\n" +
			"  justify-content: space-between;\n" +
			"  flex-wrap: wrap-reverse;\n" +
			"}\n" +
			"\n" +
			"Add the like icons using FontAwesome:\n\n" +
			'<div className="likes">\n' +
			"  <FontAwesomeIcon icon={faHeart} />\n" +
			"  <FontAwesomeIcon icon={faHeart} />\n" +
			"  <FontAwesomeIcon icon={faHeart} />\n" +
			"</div>\n" +
			"\n" +
			"Style the likes section to add spacing between icons:\n\n" +
			".likes {\n" +
			"  display: flex;\n" +
			"  gap: 4px;\n" +
			"}\n",
	},
	{
		title: "Add the Title and Description",
		description:
			"Add the title and description to the card.\n\n" +
			'<p className="title">Card Title</p>\n' +
			'<p className="description">{placeholderDescription}</p>\n' +
			"\n" +
			"Style the title to make it stand out:\n\n" +
			".title {\n" +
			"  font-size: 24px;\n" +
			"  font-weight: bold;\n" +
			"}\n",
	},
	{
		title: "Add the Tags Section",
		description:
			"Create a `div` with the class `tags` to hold the tags.\n\n" +
			'<div className="tags">\n' +
			'  <div className="tag">\n' +
			'    <p className="tag-text">tag</p>\n' +
			"  </div>\n" +
			"  <!-- Repeat for other tags -->\n" +
			"</div>\n" +
			"\n" +
			"Use Flexbox to arrange the tags in a row and allow them to wrap to the next line if needed:\n\n" +
			".tags {\n" +
			"  display: flex;\n" +
			"  flex-wrap: wrap;\n" +
			"  gap: 8px;\n" +
			"}\n" +
			"\n" +
			"Style each tag to make it visually distinct:\n\n" +
			".tag {\n" +
			"  display: flex;\n" +
			"  justify-content: center;\n" +
			"  padding: 6px 12px;\n" +
			"  border-radius: 100000vw;\n" +
			"  background: green;\n" +
			"  color: white;\n" +
			"  white-space: nowrap;\n" +
			"}\n",
	},
	{
		title: "Resize and Check Responsiveness",
		description:
			"Resize the card by grabbing the bottom right corner and notice how flexbox makes the card responsive without any extra media queries.",
	},
];

export default function FlexCard() {
	const [step, setStep] = useState(1);
	return (
		<>
			<div className="p-6 space-y-2">
				<div className="border flex justify-between p-4">
					{step !== 1 ? (
						<button onClick={() => setStep(step - 1)}>
							<FontAwesomeIcon icon={faArrowLeft} />
						</button>
					) : (
						<div></div>
					)}
					<h2 className="text-xl font-bold">
						Step {step}: {steps[step - 1].title}
					</h2>
					{step !== steps.length ? (
						<button onClick={() => setStep(step + 1)}>
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					) : (
						<div></div>
					)}
				</div>
				<div className="grid rounded border grid-cols-2">
					{/* code */}
					<div className="border-e p-4">
						<pre className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap">
							{steps[step - 1].description}
						</pre>
					</div>
					{/* the card */}
					<div className={`p-4 ${step === 1 && "grid grid-cols-2 gap-2"}`}>
						<Card step={step} />
					</div>
				</div>
			</div>
		</>
	);
}
