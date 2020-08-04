import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.scss']
})
export class SalaComponent implements OnInit {


  private sala: string;
  private jitsi: any;
  private idealWidthResolution = 640;
  private idealHeightResolution = 360;

  joinedParticipant: any = null;

  private options = {
    roomName: 'EntaoVenhaProSalaoOuouo',
    parentNode: {},
    configOverwrite: {
      enableTalkWhileMuted: false,
      enableNoisyMicDetection: false,
      disableInviteFunctions: true,
      resolution: this.idealWidthResolution,
      debug: false,
      constraints: {
        video: {
          width: {
            ideal: this.idealWidthResolution,
            max: 640,
            min: 120
          },
          height: {
            ideal: this.idealHeightResolution,
            max: 360,
            min: 120
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
  };


  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sala = this.route.snapshot.params['sala'];
    if (this.sala) { this.options.roomName = this.sala }
    this.options.parentNode = document.querySelector('#jitsi'); // Setting parentNode option on init after the DOM has rendered
    this.jitsi = new (window as any).JitsiMeetExternalAPI('meet.jit.si', this.options);
    this.jitsi.addEventListener('videoConferenceJoined', this.videoConferenceJoined);
    this.executeCommands();
  }

  videoConferenceJoined = (participant) => {
    this.joinedParticipant = participant;
    // this.jitsi.executeCommand('setVideoQuality', 360);
  }

  callGeral(){    
    this.jitsi.dispose();
    this.options.roomName = "Geral"
    this.jitsi = new (window as any).JitsiMeetExternalAPI('meet.jit.si', this.options);   
  }

  executeCommands() {
    this.jitsi.executeCommand('setVideoQuality', this.idealHeightResolution);
    this.jitsi.executeCommand('displayName', 'Rogério');
    this.jitsi.executeCommand('subject', 'Salão de Luz');    
  }

}
