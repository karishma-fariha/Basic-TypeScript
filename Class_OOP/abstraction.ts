// interface MediaPlayer {
//     play(): void;
//     pause(): void;
//     stop(): void;
// }

// // implementation
// class MusicPlayer implements MediaPlayer {
//     play(): void {
//         console.log('Playing music...');
//     }
//     pause(): void {
//         console.log('music pause...')
//     }
//     stop(): void {
//         console.log("music stop....");
//     }
// }
// const myPlayer= new MusicPlayer();
// myPlayer.play();



abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}
// implementation
class MyPlayer extends MediaPlayer {
    play(): void {
        console.log('Playing music...');
    }
    pause(): void {
        console.log('music pause...')
    }
    stop(): void {
        console.log("music stop....");
    }
}

const myPlayer=new MyPlayer();
myPlayer.play()