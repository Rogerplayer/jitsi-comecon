const api = new JitsiMeetExternalAPI('meet.jit.si', {
    roomName: 'EntaoVenhaProSalaoOuouo',
    parentNode: document.querySelector('#jitsi'),
    userInfo: {
        email: 'vento@amigo.com.br',
        displayName: 'Amigo Vento'
    },
    configOverwrite: {
        enableTalkWhileMuted: false,
        enableNoisyMicDetection: false,
        disableInviteFunctions: true,
        resolution: 360,
        constraints: {
            video: {
                height: {
                    ideal: 360,
                    max: 720,
                    min: 240
                }
            }
        },
    },
    interfaceConfigOverwrite: {
        DEFAULT_BACKGROUND: '#111',
        DEFAULT_REMOTE_DISPLAY_NAME: 'Confraternista',
        DISABLE_VIDEO_BACKGROUND: true,
        HIDE_INVITE_MORE_HEADER: true,
        DISPLAY_WELCOME_PAGE_CONTENT: false,
        DISPLAY_WELCOME_PAGE_TOOLBAR_ADDITIONAL_CONTENT: false,
        ENABLE_FEEDBACK_ANIMATION: false,
        SHOW_CHROME_EXTENSION_BANNER: false,
    }
});

api.addEventListener('participantJoined', function (participant) {
    console.log("ENTROU:", participant);
});