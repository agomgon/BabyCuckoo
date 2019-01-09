import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { CONFIG } from '../../providers/app-config';
import { AudioProvider } from '../../providers/AudioProvider';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {
  private audioprovider: AudioProvider;
  private playingTime: number;
  private randomTime: number;
  interval;

  constructor(public navCtrl: NavController,
    private route: ActivatedRoute) { 
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    if(this.route.snapshot.paramMap.get(CONFIG.ROUTING_PARAMPLAYER_PLAYTIME) === undefined || Number(this.route.snapshot.paramMap.get(CONFIG.ROUTING_PARAMPLAYER_PLAYTIME)) < 1)
      this.playingTime = CONFIG.TIME_DEFAULTPLAYING;
    else
      this.playingTime = Number(this.route.snapshot.paramMap.get(CONFIG.ROUTING_PARAMPLAYER_PLAYTIME));
    
    if(this.route.snapshot.paramMap.get(CONFIG.ROUTING_PARAMPLAYER_RANDOMTIME) === undefined || Number(this.route.snapshot.paramMap.get(CONFIG.ROUTING_PARAMPLAYER_RANDOMTIME)) < 1)
      this.randomTime = CONFIG.TIME_DEFAULTRANDOM;
    else
      this.randomTime = Number(this.route.snapshot.paramMap.get(CONFIG.ROUTING_PARAMPLAYER_RANDOMTIME));
    
    this.audioprovider = new AudioProvider(CONFIG.MUSIC_DEFAULT);

    try{
      this.audioprovider.play();
      this.startTimer();
    }catch(error){
      alert(error);
    }
  }

  public onStopClicked(): void{
    clearInterval(this.interval);
    this.audioprovider.stop();
    this.navCtrl.goBack();
  }

  private startTimer(): void {
    this.interval = setInterval(() => {
      if(this.playingTime > 0) {
        this.playingTime--;
      } else {
        this.onStopClicked();
      }
    },1000)
  }
}
