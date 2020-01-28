/* eslint-disable require-jsdoc */

// initialize userId/roomId
$('#userId').val('user_' + parseInt(Math.random() * 100000000));
$('#roomId').val('889988');

let rtc = null;

const userId = 'user_' + parseInt(Math.random() * 100000000)
const roomId = '889988'

$(document.body).ready(function(){
    $('#startLoop').show()
})
let isStart = false
$('#startLoop').on('click', function (e) {
    e.preventDefault();

    if (isStart) {
        isStart = false
        rtc.leave();
        rtc.unpublish();
        rtc = null;
        $('#startLoop').text('开始视频')
        return
    }
    isStart = true
    $('#startLoop').text('关闭视频')

    const config = genTestUserSig(userId);
    rtc = new RtcClient({
        userId,
        roomId,
        sdkAppId: config.sdkAppId,
        userSig: config.userSig
    });
    rtc.join().then(function(){
        rtc.publish();
    })
    
})


// $('#settings').on('click', function (e) {
//     e.preventDefault();
//     $('#settings').toggleClass('btn-raised');
//     $('#setting-collapse').collapse();
// });
