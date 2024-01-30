const axios = require('axios');
const config = require('./config');


const sendSms = async (numbers, message) => {
    try {
        const xmlData = `
            <MainmsgBody>
                <UserName>${config.username}</UserName>
                <PassWord>${config.password}</PassWord>
                <Action>1</Action>
                <Messages>
                    <Message>
                        <Mesgbody>${message}</Mesgbody>
                        <Number>${numbers}</Number>
                    </Message>
                </Messages>
                <AccountId>1</AccountId>
                <Originator>${config.alphanumeric}</Originator>
                <SDate></SDate>
                <EDate></EDate>
                <Encoding>1</Encoding>
                <MessageType>N</MessageType>
                <RecipientType></RecipientType>
            </MainmsgBody>
        `;


        const response = await axios.request({
            url: 'https://xmlapi.mobildev.com',
            method: 'post',
            headers: { 'Content-Type': 'application/xml' },
            data: xmlData
        });


        return response.data;
    } catch (error) {
        throw new Error(error.response.data);
    }
};


module.exports = { sendSms };