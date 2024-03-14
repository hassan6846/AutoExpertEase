async function GenerateOtp(params) {
    // Generating Random OTP
    const GenOtp = Math.floor(Math.random() * 9999 + 1);

    // Convert OTP to string
    let otpString = GenOtp.toString();

    // Pad with zeros if necessary to ensure 4 digits
    while (otpString.length < 4) {
        otpString = "0" + otpString;
    }

    console.log(`${otpString}`);
    return otpString;
}

module.exports = { GenerateOtp };
