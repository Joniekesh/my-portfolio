import "./contact.scss";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
	const formRef = useRef();
	const [done, setDone] = useState(false);

	const SERVICE = process.env.REACT_APP_EMAILJS_SERVICE_ID;
	const TEMPLATE = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
	const USER = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

	const submitHandler = (e) => {
		e.preventDefault();

		emailjs.sendForm(SERVICE, TEMPLATE, formRef.current, USER).then(
			(result) => {
				console.log(result.text);
				setDone(true);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	return (
		<div className="contact" id="contact">
			<div className="titleContainer">
				<h1 className="title">CONTACT</h1>
				<div className="line"></div>
			</div>
			<div className="contactWrapper">
				<div className="contactLeft">
					<form ref={formRef} onSubmit={submitHandler}>
						<div className="formGroup">
							<label>Name</label>
							<input
								type="text"
								placeholder="Enter your name"
								name="user_name"
								required
							/>
						</div>
						<div className="formGroup">
							<label>Email</label>
							<input
								type="email"
								placeholder="Enter your email"
								name="user_email"
								required
							/>
						</div>
						<div className="formGroup">
							<label>Subject</label>
							<input
								type="text"
								placeholder="Subject"
								name="user_subject"
								required
							/>
						</div>
						<div className="formGroup">
							<label>Message</label>
							<textarea
								rows="3"
								placeholder="Message"
								name="message"
								required
							></textarea>
						</div>
						<button type="submit">SEND</button>
						{done && (
							<span style={{ color: "green" }}>
								Email sent. You will receive a reply soon <br />
								Thank You!
							</span>
						)}
					</form>
				</div>

				<div className="contactRight">
					<div className="socialDiv">
						<i className="fa-brands fa-whatsapp"></i>
						<a
							href=" https://wa.me/+2348050667156?text=urlencodedtext"
							target="_blank"
							rel="noreferrer"
							style={{ color: "white" }}
						>
							+234 8050 667 156
						</a>
					</div>
					<div className="socialDiv">
						<i className="fa-solid fa-envelope"></i>
						<a
							href="mailto:joniedev101@gmail.com"
							style={{ color: "white" }}
							target="_blank"
							rel="noreferrer"
						>
							joniedev101@gmail.com
						</a>
					</div>
					<div className="socialDiv">
						<i className="fa-brands fa-linkedin-in"></i>
						<a
							href="https://www.linkedin.com/in/okoro-john-1b7789bb"
							target="_blank"
							rel="noreferrer"
							style={{ color: "white" }}
						>
							https://www.linkedin.com/in/okoro-john-1b7789bb
						</a>
					</div>
					<div className="socialDiv">
						<i className="fa-brands fa-twitter"></i>
						<a
							href="https://www.twitter.com/jonie_dev"
							target="_blank"
							rel="noreferrer"
							style={{ color: "white" }}
						>
							https://www.twitter.com/jonie_dev
						</a>
					</div>
					<div className="socialDiv">
						<i className="fa-brands fa-github"></i>
						<a
							href="https://www.github.com/Joniekesh"
							target="_blank"
							rel="noreferrer"
							style={{ color: "white" }}
						>
							https://www.github.com/Joniekesh
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
