import nodemailer from "nodemailer";

// test email: icif bfyh ozpc quaa
// ? this password is changed

export async function POST(req: Request) {
	// const { subject, message } = await req.json();

	const transporter = nodemailer.createTransport({
		service: "gmail",
		host: "smt.gmail.com",
		port: 465,
		secure: false,
		auth: {
			user: "sokol.paja@inova.al",
			// ? this password is changed
			pass: "icif bfyh ozpc quaa",
		},
	});

	const options = {
		from: {
			name: "Sokol@inova",
			address: "sokol.paja@inova.al",
		},
		to: "sokol.paja@inova.al",
		subject: "Message title",
		text: "Plaintext version of the message",
		html: "<p>HTML version of the message</p>",
	};

	try {
		await transporter.sendMail(options);
		console.log("email sent");
		return new Response(
			JSON.stringify({
				msg: "email sent successfully",
			})
		);
	} catch (error) {
		console.log("🚀 ~ sendMail ~ error:", error);
		return new Response(
			JSON.stringify({
				msg: "sendMail error",
				error,
			})
		);
	}
}
