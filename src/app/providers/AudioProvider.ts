export class AudioProvider {
    private audio: any;
    private mediaPath: string;

    constructor(mediaPath: string){
        this.mediaPath = mediaPath;
        this.audio = new Audio();
    }

    public play():void{
        this.audio.src = this.mediaPath;
        this.audio.load();
        this.audio.play();
    }

    public stop():void{
        this.audio.pause();
        this.audio.currentTime = 0;
    }
}