const { sendSms } = require('../lib');


(async () => {
    try {
        const response = await sendSms(['3525334265'], 'Test message from Mobildev SMS API');
        console.log(response);
    } catch (error) {
        console.error(error.message);
    }
})();
