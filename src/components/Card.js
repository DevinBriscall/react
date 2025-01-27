import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const placeholderDescription =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export default function Card({ step }) {
	if (step === 1) return <Step1 />;
	if (step === 2) return <Step2 />;
	if (step === 3) return <Step3 />;
	if (step === 4) return <Step4 />;
	if (step === 5) return <Step5 />;
	if (step === 6) return <Step6 />;
	if (step === 7) return <Step7 />;
	if (step === 8) return <Step8 />;
}

function Step1() {
	return (
		<>
			<div className="card">
				<img src="images/penguin.jpeg" alt="penguin" />

				<div className="card-content">
					<div className="top-row">
						<p className="username">
							posted by:{" "}
							<span className="bold">cool_username_cool_username</span>
						</p>

						<div className="likes">
							<FontAwesomeIcon icon={faHeart} />
							<FontAwesomeIcon icon={faHeart} />
							<FontAwesomeIcon icon={faHeart} />
						</div>
					</div>

					<p className="title">Card Title</p>
					<p className="description">{placeholderDescription}</p>

					<div className="tags">
						<div className="tag">
							<p className="tag-text">tag</p>
						</div>

						<div className="tag">
							<p className="tag-text">longer tag</p>
						</div>

						<div className="tag">
							<p className="tag-text">longer tag</p>
						</div>

						<div className="tag">
							<p className="tag-text">longer tag</p>
						</div>

						<div className="tag">
							<p className="tag-text">longer tag</p>
						</div>

						<div className="tag">
							<p className="tag-text">longer tag</p>
						</div>
					</div>
				</div>
			</div>
			<div className="card boxes-card">
				<div>
					<img src="images/penguin.jpeg" alt="penguin" />
				</div>

				<div className="card-content">
					<div className="top-row">
						<p className="username">
							posted by:{" "}
							<span className="bold">cool_username_cool_username</span>
						</p>

						<div className="likes">
							<FontAwesomeIcon icon={faHeart} />
							<FontAwesomeIcon icon={faHeart} />
							<FontAwesomeIcon icon={faHeart} />
						</div>
					</div>

					<p className="title">Card Title</p>
					<p className="description">{placeholderDescription}</p>

					<div className="tags">
						<div className="tag">
							<p className="tag-text">tag</p>
						</div>

						<div className="tag">
							<p className="tag-text">longer tag</p>
						</div>

						<div className="tag">
							<p className="tag-text">longer tag</p>
						</div>

						<div className="tag">
							<p className="tag-text">longer tag</p>
						</div>

						<div className="tag">
							<p className="tag-text">longer tag</p>
						</div>

						<div className="tag">
							<p className="tag-text">longer tag</p>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.card {
					box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
				}

				.card-content {
					display: flex;
					flex-direction: column;
					gap: 16px;
					padding: 16px;
				}

				.top-row {
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap-reverse;
				}

				.title {
					font-size: 24px;
					font-weight: bold;
				}

				.likes {
					display: flex;
					gap: 4px;
				}

				.tags {
					display: flex;
					flex-wrap: wrap;
					flex-direction: row;
					align-items: flex-start;
					gap: 8px;
				}

				.tag {
					display: flex;
					justify-content: center;
					padding: 6px 12px;
					border-radius: 100000vw;
					background: green;
					color: white;
					white-space: nowrap;
				}

				.bold {
					font-weight: bold;
				}

				img {
					display: block;
					width: 100%;
					max-height: 200px;
					aspect-ratio: 1/1;
					object-fit: cover;
				}

				//stuff to hide content
				.boxes-card * {
					border: 1px solid black;
					color: white;
					background: white;
					border-radius: 0;
				}

				.boxes-card img {
					opacity: 0;
				}

				.boxes-card .tag p,
				.boxes-card .username span {
					border: none;
				}
			`}</style>
		</>
	);
}

function Step2() {
	return (
		<>
			<div className="card">Content will go here...</div>
			<style jsx>{`
				.card {
					box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
					resize: both;
					overflow: auto;
				}
			`}</style>
		</>
	);
}

function Step3() {
	return (
		<>
			<div className="card">
				<img src="images/penguin.jpeg" alt="penguin" />
			</div>
			<style jsx>{`
				.card {
					box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
					resize: both;
					overflow: auto;
				}
				img {
					display: block;
					width: 100%;
					max-height: 200px;
					aspect-ratio: 1/1;
					object-fit: cover;
				}
			`}</style>
		</>
	);
}

function Step4() {
	return (
		<>
			<div className="card">
				<img src="images/penguin.jpeg" alt="penguin" />
				<div className="card-content"></div>
			</div>
			<style jsx>{`
				.card {
					box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
					resize: both;
					overflow: auto;
				}
				img {
					display: block;
					width: 100%;
					max-height: 200px;
					aspect-ratio: 1/1;
					object-fit: cover;
				}
				.card-content {
					display: flex;
					flex-direction: column;
					gap: 16px;
					padding: 16px;
				}
			`}</style>
		</>
	);
}

function Step5() {
	return (
		<>
			<div className="card">
				<img src="images/penguin.jpeg" alt="penguin" />
				<div className="card-content">
					<div className="top-row">
						<p className="username">
							posted by:{" "}
							<span className="bold">cool_username_cool_username</span>
						</p>
						<div className="likes">
							<FontAwesomeIcon icon={faHeart} />
							<FontAwesomeIcon icon={faHeart} />
							<FontAwesomeIcon icon={faHeart} />
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.card {
					box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
					resize: both;
					overflow: auto;
				}
				img {
					display: block;
					width: 100%;
					max-height: 200px;
					aspect-ratio: 1/1;
					object-fit: cover;
				}
				.card-content {
					display: flex;
					flex-direction: column;
					gap: 16px;
					padding: 16px;
				}
				.top-row {
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap-reverse;
				}
				.likes {
					display: flex;
					gap: 4px;
				}
				.bold {
					font-weight: bold;
				}
			`}</style>
		</>
	);
}

function Step6() {
	return (
		<>
			<div className="card">
				<img src="images/penguin.jpeg" alt="penguin" />
				<div className="card-content">
					<div className="top-row">
						<p className="username">
							posted by:{" "}
							<span className="bold">cool_username_cool_username</span>
						</p>
						<div className="likes">
							<FontAwesomeIcon icon={faHeart} />
							<FontAwesomeIcon icon={faHeart} />
							<FontAwesomeIcon icon={faHeart} />
						</div>
					</div>
					<p className="title">Card Title</p>
					<p className="description">{placeholderDescription}</p>
				</div>
			</div>
			<style jsx>{`
				.card {
					box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
					resize: both;
					overflow: auto;
				}
				img {
					display: block;
					width: 100%;
					max-height: 200px;
					aspect-ratio: 1/1;
					object-fit: cover;
				}
				.card-content {
					display: flex;
					flex-direction: column;
					gap: 16px;
					padding: 16px;
				}
				.top-row {
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap-reverse;
				}
				.title {
					font-size: 24px;
					font-weight: bold;
				}
				.likes {
					display: flex;
					gap: 4px;
				}
				.bold {
					font-weight: bold;
				}
			`}</style>
		</>
	);
}

function Step7() {
	return (
		<>
			<div className="card">
				<img src="images/penguin.jpeg" alt="penguin" />
				<div className="card-content">
					<div className="top-row">
						<p className="username">
							posted by:{" "}
							<span className="bold">cool_username_cool_username</span>
						</p>
						<div className="likes">
							<FontAwesomeIcon icon={faHeart} />
							<FontAwesomeIcon icon={faHeart} />
							<FontAwesomeIcon icon={faHeart} />
						</div>
					</div>
					<p className="title">Card Title</p>
					<p className="description">{placeholderDescription}</p>
					<div className="tags">
						<div className="tag">
							<p className="tag-text">tag</p>
						</div>
						<div className="tag">
							<p className="tag-text">longer tag</p>
						</div>
						<div className="tag">
							<p className="tag-text">longer tag</p>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.card {
					box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
					resize: both;
					overflow: auto;
				}
				img {
					display: block;
					width: 100%;
					max-height: 200px;
					aspect-ratio: 1/1;
					object-fit: cover;
				}
				.card-content {
					display: flex;
					flex-direction: column;
					gap: 16px;
					padding: 16px;
				}
				.top-row {
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap-reverse;
				}
				.title {
					font-size: 24px;
					font-weight: bold;
				}
				.likes {
					display: flex;
					gap: 4px;
				}
				.tags {
					display: flex;
					flex-wrap: wrap;
					gap: 8px;
				}
				.tag {
					display: flex;
					justify-content: center;
					padding: 6px 12px;
					border-radius: 100000vw;
					background: green;
					color: white;
					white-space: nowrap;
				}
				.bold {
					font-weight: bold;
				}
			`}</style>
		</>
	);
}

function Step8() {
	return (
		<>
			<div className="card">
				<img src="images/penguin.jpeg" alt="penguin" />
				<div className="card-content">
					<div className="top-row">
						<p className="username">
							posted by:{" "}
							<span className="bold">cool_username_cool_username</span>
						</p>
						<div className="likes">
							<FontAwesomeIcon icon={faHeart} />
							<FontAwesomeIcon icon={faHeart} />
							<FontAwesomeIcon icon={faHeart} />
						</div>
					</div>
					<p className="title">Card Title</p>
					<p className="description">{placeholderDescription}</p>
					<div className="tags">
						<div className="tag">
							<p className="tag-text">tag</p>
						</div>
						<div className="tag">
							<p className="tag-text">longer tag</p>
						</div>
						<div className="tag">
							<p className="tag-text">longer tag</p>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.card {
					box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
					resize: both;
					overflow: auto;
				}
				img {
					display: block;
					width: 100%;
					max-height: 200px;
					aspect-ratio: 1/1;
					object-fit: cover;
				}
				.card-content {
					display: flex;
					flex-direction: column;
					gap: 16px;
					padding: 16px;
				}
				.top-row {
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap-reverse;
				}
				.title {
					font-size: 24px;
					font-weight: bold;
				}
				.likes {
					display: flex;
					gap: 4px;
				}
				.tags {
					display: flex;
					flex-wrap: wrap;
					gap: 8px;
				}
				.tag {
					display: flex;
					justify-content: center;
					padding: 6px 12px;
					border-radius: 100000vw;
					background: green;
					color: white;
					white-space: nowrap;
				}
				.bold {
					font-weight: bold;
				}
			`}</style>
		</>
	);
}
