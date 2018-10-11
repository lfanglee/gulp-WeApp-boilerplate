export const test = (a, b) => {
    return wx.cloud.callFunction({
        name: 'test',
        data: {
            a, b
        }
    });
};

export const getUserInfo = () => {
    return wx.cloud.callFunction({
        name: 'getUserInfo'
    });
};