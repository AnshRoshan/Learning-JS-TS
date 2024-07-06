function SimpleTest({ username, email, age }) {
	return (
		<div>
			<h1>Simple Test</h1>
			<p>This is a simple test component</p>
			<div>
				<p>Username: {username}</p>
				<p>Email: {email}</p>
				<p>Age: {age}</p>
			</div>
		</div>
	)
}
export default SimpleTest
