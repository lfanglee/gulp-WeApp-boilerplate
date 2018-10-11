const cloud = require('wx-server-sdk');
cloud.init({
    env: 'fresh-weather-5bf15d',
    traceUser: true
});
const db = cloud.database();

exports.main = async (event, context) => {
    return {
        // userInfo: event.userInfo,
        data: await db.collection('todos').doc('W73tmgIrVDZJFsng').get()
    };
};