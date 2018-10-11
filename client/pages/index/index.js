import {getUserInfo} from '../../lib/api-mock';

const db = wx.cloud.database();
Page({
    data: {
        motto: 'hello, world!',
    },
    onLoad() {
        db.collection('todos').get().then(res => {
            console.log(res);
        })
    }
});